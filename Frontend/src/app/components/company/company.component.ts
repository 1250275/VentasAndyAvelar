import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Company } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: any = [];
  fileName = 'Empresas.xlsx';

  company: Company = this.newCompany();

  constructor(private Data: DataService) { }


  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  ngOnInit(): void {

    this.getCompanies();
  }

  newCompany(): Company {
    return {
      idempresa: null,
      nombre: null,
      direccion: null,
      rtn: null,
      telefono: null,
      correo: null,
      contacto: null,
      fecha_creacion: null,
      estado: 'Activo'
    };
  }

  getCompanies() {
    this.Data.getAll('/companies')
      .subscribe(res => {
        this.companies = res;
      }, err => console.error(err));
  }

  addCompany() {
    delete this.company.idempresa;
    this.Data.save(this.company, '/companies')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.company = this.newCompany();
          this.getCompanies();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteCompany(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/companies')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getCompanies();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }
  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.fileName);
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('empresas.pdf');
    });

  }
}
