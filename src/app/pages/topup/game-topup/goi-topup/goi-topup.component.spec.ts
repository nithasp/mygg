import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiTopupComponent } from './goi-topup.component';

describe('GoiTopupComponent', () => {
  let component: GoiTopupComponent;
  let fixture: ComponentFixture<GoiTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiTopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
