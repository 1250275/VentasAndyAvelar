import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any = [];

  employee: Employee = {
    idemp: null,
    idempresa: null,
    idsuc: null,
    idarea: null,
    identidad: null,
    fecha_nac: null,
    nombres: null,
    apellidos: null,
    sexo: null,
    estado_civil: null,
    direccion: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.Data.getAll('/employees')
      .subscribe(res => {
        this.employees = res;
      }, err => console.error(err));
  }

}
