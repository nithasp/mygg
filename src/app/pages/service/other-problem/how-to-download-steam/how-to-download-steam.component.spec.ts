import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToDownloadSteamComponent } from './how-to-download-steam.component';

describe('HowToDownloadSteamComponent', () => {
  let component: HowToDownloadSteamComponent;
  let fixture: ComponentFixture<HowToDownloadSteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToDownloadSteamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToDownloadSteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
