import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryMyAccountComponent } from './recovery-my-account.component';

describe('RecoveryMyAccountComponent', () => {
  let component: RecoveryMyAccountComponent;
  let fixture: ComponentFixture<RecoveryMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoveryMyAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecoveryMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
