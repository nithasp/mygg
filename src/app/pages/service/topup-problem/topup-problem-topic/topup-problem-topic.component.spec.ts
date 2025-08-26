import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupProblemTopicComponent } from './topup-problem-topic.component';

describe('TopupProblemTopicComponent', () => {
  let component: TopupProblemTopicComponent;
  let fixture: ComponentFixture<TopupProblemTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopupProblemTopicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopupProblemTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
