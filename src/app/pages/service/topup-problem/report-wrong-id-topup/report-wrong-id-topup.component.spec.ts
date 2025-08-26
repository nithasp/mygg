import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWrongIdTopupComponent } from './report-wrong-id-topup.component';

describe('ReportWrongIdTopupComponent', () => {
  let component: ReportWrongIdTopupComponent;
  let fixture: ComponentFixture<ReportWrongIdTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportWrongIdTopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportWrongIdTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
