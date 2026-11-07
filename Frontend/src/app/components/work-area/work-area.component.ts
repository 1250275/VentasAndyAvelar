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

  workArea: WorkArea = this.newWorkArea();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getWorkAreas();
  }

  newWorkArea(): WorkArea {
    return {
      idarea: null,
      idempresa: null,
      idsuc: null,
      area: null,
      fecha_creacion: null,
      estado: 'Activo'
    };
  }

  getWorkAreas() {
    this.Data.getAll('/work-areas')
      .subscribe(res => {
        this.workAreas = res;
      }, err => console.error(err));
  }

  addWorkArea() {
    delete this.workArea.idarea;
    this.Data.save(this.workArea, '/work-areas')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.workArea = this.newWorkArea();
          this.getWorkAreas();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteWorkArea(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/work-areas')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getWorkAreas();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
