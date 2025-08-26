import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToRegisterHotmailOutlookComponent } from './how-to-register-hotmail-outlook.component';

describe('HowToRegisterHotmailOutlookComponent', () => {
  let component: HowToRegisterHotmailOutlookComponent;
  let fixture: ComponentFixture<HowToRegisterHotmailOutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToRegisterHotmailOutlookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToRegisterHotmailOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
