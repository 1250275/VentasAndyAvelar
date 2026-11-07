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

  user: User = {
    userid: null,
    idempresa: null,
    idsuc: null,
    idtpusuario: null,
    idemp: null,
    usuario: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.Data.getAll('/users')
      .subscribe(res => {
        this.users = res;
      }, err => console.error(err));
  }

}
