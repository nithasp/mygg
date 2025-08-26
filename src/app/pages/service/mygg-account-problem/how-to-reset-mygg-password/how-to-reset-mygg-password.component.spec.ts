import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToResetMyggPasswordComponent } from './how-to-reset-mygg-password.component';

describe('HowToResetMyggPasswordComponent', () => {
  let component: HowToResetMyggPasswordComponent;
  let fixture: ComponentFixture<HowToResetMyggPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToResetMyggPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToResetMyggPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
