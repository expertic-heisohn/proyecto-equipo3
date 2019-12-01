import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoresComponent } from './empleadores.component';

describe('EmpleadoresComponent', () => {
  let component: EmpleadoresComponent;
  let fixture: ComponentFixture<EmpleadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
