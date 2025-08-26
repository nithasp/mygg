import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToRegisterSteamComponent } from './how-to-register-steam.component';

describe('HowToRegisterSteamComponent', () => {
  let component: HowToRegisterSteamComponent;
  let fixture: ComponentFixture<HowToRegisterSteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToRegisterSteamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToRegisterSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
