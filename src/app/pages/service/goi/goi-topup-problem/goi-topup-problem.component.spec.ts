import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiTopupProblemComponent } from './goi-topup-problem.component';

describe('GoiTopupProblemComponent', () => {
  let component: GoiTopupProblemComponent;
  let fixture: ComponentFixture<GoiTopupProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiTopupProblemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiTopupProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
