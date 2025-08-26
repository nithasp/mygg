import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyggAccountProblemTopicComponent } from './mygg-account-problem-topic.component';

describe('MyggAccountProblemTopicComponent', () => {
  let component: MyggAccountProblemTopicComponent;
  let fixture: ComponentFixture<MyggAccountProblemTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyggAccountProblemTopicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyggAccountProblemTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
