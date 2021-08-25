import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodComponent } from './period.component';

describe('MonthsComponent', () => {
  let component: PeriodComponent;
  let fixture: ComponentFixture<PeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
