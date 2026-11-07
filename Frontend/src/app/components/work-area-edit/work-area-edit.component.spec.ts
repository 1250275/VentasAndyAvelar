import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaEditComponent } from './work-area-edit.component';

describe('WorkAreaEditComponent', () => {
  let component: WorkAreaEditComponent;
  let fixture: ComponentFixture<WorkAreaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkAreaEditComponent]
    });
    fixture = TestBed.createComponent(WorkAreaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
