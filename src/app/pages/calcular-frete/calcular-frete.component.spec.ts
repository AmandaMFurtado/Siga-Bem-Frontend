import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularFreteComponent } from './calcular-frete.component';

describe('CalcularFreteComponent', () => {
  let component: CalcularFreteComponent;
  let fixture: ComponentFixture<CalcularFreteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcularFreteComponent]
    });
    fixture = TestBed.createComponent(CalcularFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
