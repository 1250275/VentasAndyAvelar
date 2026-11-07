import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: any = [];

  company: Company = this.newCompany();

  constructor(private Data: DataService) { }

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

}
