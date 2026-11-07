import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierEditComponent } from './supplier-edit.component';

describe('SupplierEditComponent', () => {
  let component: SupplierEditComponent;
  let fixture: ComponentFixture<SupplierEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierEditComponent]
    });
    fixture = TestBed.createComponent(SupplierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
