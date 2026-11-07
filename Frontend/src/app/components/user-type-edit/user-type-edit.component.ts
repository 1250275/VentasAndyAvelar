import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-type-edit',
  templateUrl: './user-type-edit.component.html',
  styleUrls: ['./user-type-edit.component.css']
})
export class UserTypeEditComponent implements OnInit {

  userType: UserType = {
      idtpusuario: null,
      idempresa: null,
      tipo: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/user-types')
        .subscribe(
          res => {
            this.userType = res;
          },
          err => console.error(err)
        );
    }
  }

  updateUserType() {
    this.Data.update(this.userType.idtpusuario!, this.userType, '/user-types')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/user-types']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
