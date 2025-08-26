import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupProblemComponent } from './topup-problem.component';

describe('TopupProblemComponent', () => {
  let component: TopupProblemComponent;
  let fixture: ComponentFixture<TopupProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopupProblemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopupProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
