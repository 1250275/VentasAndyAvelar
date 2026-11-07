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

  branch: Branch = {
    idsuc: null,
    idempresa: null,
    sucursal: null,
    dirsuc: null,
    telefono: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches() {
    this.Data.getAll('/branches')
      .subscribe(res => {
        this.branches = res;
      }, err => console.error(err));
  }

}
