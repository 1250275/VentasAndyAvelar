import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = [];

  product: Product = this.newProduct();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  newProduct(): Product {
    return {
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
  }

  getProducts() {
    this.Data.getAll('/products')
      .subscribe(res => {
        this.products = res;
      }, err => console.error(err));
  }

  addProduct() {
    delete this.product.num_prod;
    this.Data.save(this.product, '/products')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.product = this.newProduct();
          this.getProducts();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteProduct(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/products')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getProducts();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
