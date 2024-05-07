import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploBotonComponent } from './ejemplo-boton.component';

describe('EjemploBotonComponent', () => {
  let component: EjemploBotonComponent;
  let fixture: ComponentFixture<EjemploBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploBotonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
