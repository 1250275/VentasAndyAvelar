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

  company: Company = {
    idempresa: null,
    nombre: null,
    direccion: null,
    rtn: null,
    telefono: null,
    correo: null,
    contacto: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.Data.getAll('/companies')
      .subscribe(res => {
        this.companies = res;
      }, err => console.error(err));
  }

}
