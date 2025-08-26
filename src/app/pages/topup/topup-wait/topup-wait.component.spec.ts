import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupWaitComponent } from './topup-wait.component';

describe('TopupWaitComponent', () => {
  let component: TopupWaitComponent;
  let fixture: ComponentFixture<TopupWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopupWaitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopupWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
