import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-type-edit',
  templateUrl: './product-type-edit.component.html',
  styleUrls: ['./product-type-edit.component.css']
})
export class ProductTypeEditComponent implements OnInit {

  productType: ProductType = {
      idtpprod: null,
      idempresa: null,
      tipo: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/product-types')
        .subscribe(
          res => {
            this.productType = res;
          },
          err => console.error(err)
        );
    }
  }

  updateProductType() {
    this.Data.update(this.productType.idtpprod!, this.productType, '/product-types')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/product-types']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
