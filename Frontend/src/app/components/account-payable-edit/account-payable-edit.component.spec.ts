import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPayableEditComponent } from './account-payable-edit.component';

describe('AccountPayableEditComponent', () => {
  let component: AccountPayableEditComponent;
  let fixture: ComponentFixture<AccountPayableEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPayableEditComponent]
    });
    fixture = TestBed.createComponent(AccountPayableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
