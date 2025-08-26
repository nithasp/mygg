import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSettingHotmailForReceiveReplyFromMyggComponent } from './how-to-setting-hotmail-for-receive-reply-from-mygg.component';

describe('HowToSettingHotmailForReceiveReplyFromMyggComponent', () => {
  let component: HowToSettingHotmailForReceiveReplyFromMyggComponent;
  let fixture: ComponentFixture<HowToSettingHotmailForReceiveReplyFromMyggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToSettingHotmailForReceiveReplyFromMyggComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      HowToSettingHotmailForReceiveReplyFromMyggComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
