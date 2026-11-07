import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {
      num_prod: null,
      idempresa: null,
      idsuc: null,
      idtpprod: null,
      descripcion: null,
      presentacion: null,
      marca: null,
      valor: null,
      precioventa: null,
      existencia: null,
      fecha_ingreso: null,
      fecha_actualiza: null,
      estado: 'Activo'
    };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/products')
        .subscribe(
          res => {
            this.product = res;
          },
          err => console.error(err)
        );
    }
  }

  updateProduct() {
    this.Data.update(this.product.num_prod!, this.product, '/products')
      .subscribe(
        res => {
          alert('Registro actualizado');
          this.router.navigate(['/products']);
        },
        err => alert('No se pudo actualizar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
