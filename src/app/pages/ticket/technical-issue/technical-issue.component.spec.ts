import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalIssueComponent } from './technical-issue.component';

describe('TechnicalIssueComponent', () => {
  let component: TechnicalIssueComponent;
  let fixture: ComponentFixture<TechnicalIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalIssueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
