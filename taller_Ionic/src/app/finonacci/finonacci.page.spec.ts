import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinonacciPage } from './finonacci.page';

describe('FinonacciPage', () => {
  let component: FinonacciPage;
  let fixture: ComponentFixture<FinonacciPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinonacciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
