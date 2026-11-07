import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeEditComponent } from './product-type-edit.component';

describe('ProductTypeEditComponent', () => {
  let component: ProductTypeEditComponent;
  let fixture: ComponentFixture<ProductTypeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTypeEditComponent]
    });
    fixture = TestBed.createComponent(ProductTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
