import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciounoComponent } from './ejerciciouno.component';

describe('EjerciciounoComponent', () => {
  let component: EjerciciounoComponent;
  let fixture: ComponentFixture<EjerciciounoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciounoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjerciciounoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
