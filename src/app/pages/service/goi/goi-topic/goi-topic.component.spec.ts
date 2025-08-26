import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiTopicComponent } from './goi-topic.component';

describe('GoiTopicComponent', () => {
  let component: GoiTopicComponent;
  let fixture: ComponentFixture<GoiTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiTopicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
