import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiBugReportComponent } from './goi-bug-report.component';

describe('GoiBugReportComponent', () => {
  let component: GoiBugReportComponent;
  let fixture: ComponentFixture<GoiBugReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiBugReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiBugReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
