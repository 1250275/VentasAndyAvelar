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
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.Data.getAll('/products')
      .subscribe(res => {
        this.products = res;
      }, err => console.error(err));
  }

}
