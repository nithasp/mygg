import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupFailedComponent } from './topup-failed.component';

describe('TopupFailedComponent', () => {
  let component: TopupFailedComponent;
  let fixture: ComponentFixture<TopupFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopupFailedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopupFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
