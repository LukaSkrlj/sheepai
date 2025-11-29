import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featureswidget } from './featureswidget';

describe('Featureswidget', () => {
  let component: Featureswidget;
  let fixture: ComponentFixture<Featureswidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featureswidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featureswidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
