import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herowidget } from './herowidget';

describe('Herowidget', () => {
  let component: Herowidget;
  let fixture: ComponentFixture<Herowidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herowidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Herowidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
