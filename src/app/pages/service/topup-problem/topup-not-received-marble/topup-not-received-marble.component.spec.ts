import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupNotReceivedMarbleComponent } from './topup-not-received-marble.component';

describe('TopupNotReceivedMarbleComponent', () => {
  let component: TopupNotReceivedMarbleComponent;
  let fixture: ComponentFixture<TopupNotReceivedMarbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopupNotReceivedMarbleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopupNotReceivedMarbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
