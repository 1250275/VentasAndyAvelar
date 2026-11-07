import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

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
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/employees')
        .subscribe(
          res => {
            this.employee = res;
          },
          err => console.error(err)
        );
    }
  }

  updateEmployee() {
    this.Data.update(this.employee.idemp!, this.employee, '/employees')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/employees']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
