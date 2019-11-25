import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpleadorComponent } from './form-empleador.component';

describe('FormEmpleadorComponent', () => {
  let component: FormEmpleadorComponent;
  let fixture: ComponentFixture<FormEmpleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmpleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
