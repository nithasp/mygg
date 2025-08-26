import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruemoneyComponent } from './truemoney.component';

describe('TruemoneyComponent', () => {
  let component: TruemoneyComponent;
  let fixture: ComponentFixture<TruemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruemoneyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TruemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
