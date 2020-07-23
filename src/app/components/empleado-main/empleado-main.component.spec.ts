import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoMainComponent } from './empleado-main.component';

describe('EmpleadoMainComponent', () => {
  let component: EmpleadoMainComponent;
  let fixture: ComponentFixture<EmpleadoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
