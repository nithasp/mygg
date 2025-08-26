import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiOtherProblemComponent } from './goi-other-problem.component';

describe('GoiOtherProblemComponent', () => {
  let component: GoiOtherProblemComponent;
  let fixture: ComponentFixture<GoiOtherProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiOtherProblemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiOtherProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
