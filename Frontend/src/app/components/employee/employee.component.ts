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

  employee: Employee = this.newEmployee();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  newEmployee(): Employee {
    return {
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
    };
  }

  getEmployees() {
    this.Data.getAll('/employees')
      .subscribe(res => {
        this.employees = res;
      }, err => console.error(err));
  }

  addEmployee() {
    delete this.employee.idemp;
    this.Data.save(this.employee, '/employees')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.employee = this.newEmployee();
          this.getEmployees();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteEmployee(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/employees')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getEmployees();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
