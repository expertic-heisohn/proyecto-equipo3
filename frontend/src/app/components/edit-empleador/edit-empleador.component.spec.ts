import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpleadorComponent } from './edit-empleador.component';

describe('EditEmpleadorComponent', () => {
  let component: EditEmpleadorComponent;
  let fixture: ComponentFixture<EditEmpleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
