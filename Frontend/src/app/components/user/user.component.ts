import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];

  user: User = this.newUser();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  newUser(): User {
    return {
      userid: null,
      idempresa: null,
      idsuc: null,
      idtpusuario: null,
      idemp: null,
      usuario: null,
      clave: null,
      estado: 'Activo'
    };
  }

  getUsers() {
    this.Data.getAll('/users')
      .subscribe(res => {
        this.users = res;
      }, err => console.error(err));
  }

  addUser() {
    delete this.user.userid;
    this.Data.save(this.user, '/users')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.user = this.newUser();
          this.getUsers();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteUser(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/users')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getUsers();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
