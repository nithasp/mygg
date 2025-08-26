import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToRegisterMyggAccountComponent } from './how-to-register-mygg-account.component';

describe('HowToRegisterMyggAccountComponent', () => {
  let component: HowToRegisterMyggAccountComponent;
  let fixture: ComponentFixture<HowToRegisterMyggAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToRegisterMyggAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToRegisterMyggAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
