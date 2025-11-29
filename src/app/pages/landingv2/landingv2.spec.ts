import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingv2 } from './landingv2';

describe('Landingv2', () => {
  let component: Landingv2;
  let fixture: ComponentFixture<Landingv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingv2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
