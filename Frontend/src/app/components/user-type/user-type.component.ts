import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  userTypes: any = [];

  userType: UserType = this.newUserType();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUserTypes();
  }

  newUserType(): UserType {
    return {
      idtpusuario: null,
      idempresa: null,
      tipo: null,
      estado: 'Activo'
    };
  }

  getUserTypes() {
    this.Data.getAll('/user-types')
      .subscribe(res => {
        this.userTypes = res;
      }, err => console.error(err));
  }

  addUserType() {
    delete this.userType.idtpusuario;
    this.Data.save(this.userType, '/user-types')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.userType = this.newUserType();
          this.getUserTypes();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteUserType(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/user-types')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getUserTypes();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
