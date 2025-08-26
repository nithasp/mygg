import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProblemTopicComponent } from './other-problem-topic.component';

describe('OtherProblemTopicComponent', () => {
  let component: OtherProblemTopicComponent;
  let fixture: ComponentFixture<OtherProblemTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherProblemTopicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherProblemTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
