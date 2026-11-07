import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkArea } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-work-area-edit',
  templateUrl: './work-area-edit.component.html',
  styleUrls: ['./work-area-edit.component.css']
})
export class WorkAreaEditComponent implements OnInit {

  workArea: WorkArea = {
      idarea: null,
      idempresa: null,
      idsuc: null,
      area: null,
      fecha_creacion: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/work-areas')
        .subscribe(
          res => {
            this.workArea = res;
          },
          err => console.error(err)
        );
    }
  }

  updateWorkArea() {
    this.Data.update(this.workArea.idarea!, this.workArea, '/work-areas')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/work-areas']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
