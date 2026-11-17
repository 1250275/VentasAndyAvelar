import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = {
      userid: null,
      idempresa: null,
      idsuc: null,
      idtpusuario: null,
      idemp: null,
      usuario: null,
      clave: null,
      estado: 'Activo'
    };

  companyList: any = [];
  branchList: any = [];
  userTypeList: any = [];
  employeeList: any = [];

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListCompanyList();
    this.getDropListBranchList();
    this.getDropListUserTypeList();
    this.getDropListEmployeeList();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/users')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.error(err)
        );
    }
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

  getDropListUserTypeList() {
    this.Data.getDropList('/user-types').subscribe((data: any) => {
      this.userTypeList = data;
    });
  }

  getDropListEmployeeList() {
    this.Data.getDropList('/employees').subscribe((data: any) => {
      this.employeeList = data;
    });
  }

  updateUser() {
    // Si la clave queda vacía no se envía, para conservar la actual
    if (!this.user.clave) {
      delete this.user.clave;
    }
    this.Data.update(this.user.userid!, this.user, '/users')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/users']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
