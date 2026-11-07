import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branches: any = [];

  branch: Branch = this.newBranch();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getBranches();
  }

  newBranch(): Branch {
    return {
      idsuc: null,
      idempresa: null,
      sucursal: null,
      dirsuc: null,
      telefono: null,
      estado: 'Activo'
    };
  }

  getBranches() {
    this.Data.getAll('/branches')
      .subscribe(res => {
        this.branches = res;
      }, err => console.error(err));
  }

  addBranch() {
    delete this.branch.idsuc;
    this.Data.save(this.branch, '/branches')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.branch = this.newBranch();
          this.getBranches();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteBranch(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/branches')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getBranches();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
