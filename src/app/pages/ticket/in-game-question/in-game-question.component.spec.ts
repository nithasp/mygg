import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGameQuestionComponent } from './in-game-question.component';

describe('InGameQuestionComponent', () => {
  let component: InGameQuestionComponent;
  let fixture: ComponentFixture<InGameQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InGameQuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InGameQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
