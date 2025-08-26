import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlashyNinjaTopupComponent } from './slashy-ninja-topup.component';

describe('SlashyNinjaTopupComponent', () => {
  let component: SlashyNinjaTopupComponent;
  let fixture: ComponentFixture<SlashyNinjaTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlashyNinjaTopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SlashyNinjaTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
