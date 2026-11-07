import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReceivableEditComponent } from './account-receivable-edit.component';

describe('AccountReceivableEditComponent', () => {
  let component: AccountReceivableEditComponent;
  let fixture: ComponentFixture<AccountReceivableEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountReceivableEditComponent]
    });
    fixture = TestBed.createComponent(AccountReceivableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
