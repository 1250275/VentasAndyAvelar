import { Component, OnInit } from '@angular/core';
import { WorkArea } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {

  workAreas: any = [];

  workArea: WorkArea = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getWorkAreas();
  }

  getWorkAreas() {
    this.Data.getAll('/work-areas')
      .subscribe(res => {
        this.workAreas = res;
      }, err => console.error(err));
  }

}
