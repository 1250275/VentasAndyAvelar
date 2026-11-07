import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  productTypes: any = [];

  productType: ProductType = {
    idtpprod: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getProductTypes();
  }

  getProductTypes() {
    this.Data.getAll('/product-types')
      .subscribe(res => {
        this.productTypes = res;
      }, err => console.error(err));
  }

}
