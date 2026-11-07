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

  userType: UserType = {
    idtpusuario: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUserTypes();
  }

  getUserTypes() {
    this.Data.getAll('/user-types')
      .subscribe(res => {
        this.userTypes = res;
      }, err => console.error(err));
  }

}
