import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topbarwidget } from './topbarwidget';

describe('Topbarwidget', () => {
  let component: Topbarwidget;
  let fixture: ComponentFixture<Topbarwidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topbarwidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topbarwidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
