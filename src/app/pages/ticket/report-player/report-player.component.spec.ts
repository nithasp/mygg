import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPlayerComponent } from './report-player.component';

describe('ReportPlayerComponent', () => {
  let component: ReportPlayerComponent;
  let fixture: ComponentFixture<ReportPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportPlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
