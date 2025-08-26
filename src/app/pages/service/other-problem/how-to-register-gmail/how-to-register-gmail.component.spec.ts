import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToRegisterGmailComponent } from './how-to-register-gmail.component';

describe('HowToRegisterGmailComponent', () => {
  let component: HowToRegisterGmailComponent;
  let fixture: ComponentFixture<HowToRegisterGmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToRegisterGmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToRegisterGmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
