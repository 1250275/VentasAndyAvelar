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

  productType: ProductType = this.newProductType();

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getProductTypes();
  }

  newProductType(): ProductType {
    return {
      idtpprod: null,
      idempresa: null,
      tipo: null,
      estado: 'Activo'
    };
  }

  getProductTypes() {
    this.Data.getAll('/product-types')
      .subscribe(res => {
        this.productTypes = res;
      }, err => console.error(err));
  }

  addProductType() {
    delete this.productType.idtpprod;
    this.Data.save(this.productType, '/product-types')
      .subscribe(
        res => {
          alert('Registro almacenado');
          this.productType = this.newProductType();
          this.getProductTypes();
        },
        err => alert('No se pudo guardar el registro.\n' + err)
      );
  }

  deleteProductType(id: number) {
    if (!confirm('¿Desea eliminar el registro ' + id + '?')) {
      return;
    }
    this.Data.delete(id, '/product-types')
      .subscribe(
        res => {
          alert('Registro eliminado');
          this.getProductTypes();
        },
        err => alert('No se pudo eliminar el registro.\n' + (err.error?.sqlMessage || err.message))
      );
  }

}
