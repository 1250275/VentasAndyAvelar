import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Branch } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.css']
})
export class BranchEditComponent implements OnInit {

  branch: Branch = {
      idsuc: null,
      idempresa: null,
      sucursal: null,
      dirsuc: null,
      telefono: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/branches')
        .subscribe(
          res => {
            this.branch = res;
          },
          err => console.error(err)
        );
    }
  }

  updateBranch() {
    this.Data.update(this.branch.idsuc!, this.branch, '/branches')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/branches']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
