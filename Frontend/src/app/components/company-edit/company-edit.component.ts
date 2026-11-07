import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

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
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/companies')
        .subscribe(
          res => {
            this.company = res;
          },
          err => console.error(err)
        );
    }
  }

  updateCompany() {
    this.Data.update(this.company.idempresa!, this.company, '/companies')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/companies']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
