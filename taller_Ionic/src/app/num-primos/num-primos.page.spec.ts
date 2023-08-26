import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumPrimosPage } from './num-primos.page';

describe('NumPrimosPage', () => {
  let component: NumPrimosPage;
  let fixture: ComponentFixture<NumPrimosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumPrimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
