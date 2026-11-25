import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountPayable } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-account-payable',
  templateUrl: './account-payable.component.html',
  styleUrls: ['./account-payable.component.css']
})
export class AccountPayableComponent implements OnInit {

  accountsPayable: any = [];

  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  reportTitle = 'Cuentas por pagar';
  fileName = 'Cuentas_por_Pagar.xlsx';
  pdfName = 'cuentas_por_pagar.pdf';

  accountPayable: AccountPayable = this.newAccountPayable();

  purchaseHeaderList: any = [];
  companyList: any = [];
  branchList: any = [];
  supplierList: any = [];
  userList: any = [];
  paymentMethodList: any = [];
  productList: any = [];

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListPurchaseHeaderList();
    this.getDropListCompanyList();
    this.getDropListBranchList();
    this.getDropListSupplierList();
    this.getDropListUserList();
    this.getDropListPaymentMethodList();
    this.getDropListProductList();
    this.getAccountsPayable();
  }

  newAccountPayable(): AccountPayable {
    return {
      idcxp: null,
      num_compra: null,
      idempresa: null,
      idsuc: null,
      idprov: null,
      userid: null,
      idfpago: null,
      fecha_compra: null,
      num_prod: null,
      cantidad: null,
      precio: null,
      subtotal: null,
      isv: null,
      total: null,
      fecha_pago: null,
      estado: 'Activo'
    };
  }

  getDropListPurchaseHeaderList() {
    this.Data.getDropList('/purchase-headers').subscribe((data: any) => {
      this.purchaseHeaderList = data;
    });
  }

  getDropListCompanyList() {
    this.Data.getDropList('/companies').subscribe((data: any) => {
      this.companyList = data;
    });
  }

  getDropListBranchList() {
    this.Data.getDropList('/branches').subscribe((data: any) => {
      this.branchList = data;
    });
  }

  getDropListSupplierList() {
    this.Data.getDropList('/suppliers').subscribe((data: any) => {
      this.supplierList = data;
    });
  }

  getDropListUserList() {
    this.Data.getDropList('/users').subscribe((data: any) => {
      this.userList = data;
    });
  }

  getDropListPaymentMethodList() {
    this.Data.getDropList('/payment-methods').subscribe((data: any) => {
      this.paymentMethodList = data;
    });
  }

  getDropListProductList() {
    this.Data.getDropList('/products').subscribe((data: any) => {
      this.productList = data;
    });
  }

  getAccountsPayable() {
    this.Data.getAll('/accounts-payable')
      .subscribe(res => {
        this.accountsPayable = res;
      }, err => console.error(err));
  }

  addAccountPayable() {
    delete this.accountPayable.idcxp;
    this.Data.save(this.accountPayable, '/accounts-payable')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.accountPayable = this.newAccountPayable();
          this.getAccountsPayable();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteAccountPayable(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/accounts-payable')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getAccountsPayable();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

  // Exporta la tabla (con el filtro aplicado) a Excel, sin las columnas Eliminar / Actualizar
  exportToExcel(): void {
    let element = (document.getElementById('tabla') as HTMLElement).cloneNode(true) as HTMLElement;
    element.querySelectorAll('.no-export').forEach(cell => cell.remove());
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, { raw: true });
    // los montos y cantidades se guardan como número; RTN, identidad y teléfonos se quedan como texto
    Object.keys(worksheet).filter(key => !key.startsWith('!')).forEach(key => {
      const value = String(worksheet[key].v);
      if (/^-?(0|[1-9]\d{0,9})(\.\d+)?$/.test(value)) {
        worksheet[key].t = 'n';
        worksheet[key].v = Number(value);
      }
    });
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, this.reportTitle);
    XLSX.writeFile(book, this.fileName);
  }

  // Exporta la tabla (con el filtro aplicado) a PDF horizontal, con título, fecha y varias páginas si es necesario
  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA, {
      scale: 2,
      ignoreElements: (element) => element.classList.contains('no-export')
    }).then((canvas) => {
      let PDF = new jsPDF('l', 'mm', 'a4');
      const margin = 10;
      const top = 24;
      const pageWidth = PDF.internal.pageSize.getWidth();
      const pageHeight = PDF.internal.pageSize.getHeight();
      let fileWidth = Math.min(pageWidth - margin * 2, (canvas.width / 2) * 0.2646);
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const contentHeight = pageHeight - top - margin;
      const FILEURI = canvas.toDataURL('image/png');
      const generated = new Date().toLocaleString('es-HN');

      let position = top;
      let heightLeft = fileHeight;
      let page = 1;
      while (heightLeft > 0) {
        if (page > 1) PDF.addPage();
        PDF.addImage(FILEURI, 'PNG', margin, position, fileWidth, fileHeight);
        // se tapan los márgenes para que no se vea la parte de la tabla de otras páginas
        PDF.setFillColor(255, 255, 255);
        PDF.rect(0, 0, pageWidth, top - 2, 'F');
        PDF.rect(0, pageHeight - margin, pageWidth, margin, 'F');
        PDF.setFontSize(14);
        PDF.text('Reporte de ' + this.reportTitle, margin, 13);
        PDF.setFontSize(9);
        PDF.text('Generado: ' + generated, margin, 19);
        PDF.text('Página ' + page, pageWidth - margin, 19, { align: 'right' });
        heightLeft -= contentHeight;
        position -= contentHeight;
        page++;
      }
      PDF.save(this.pdfName);
    });
  }
}
