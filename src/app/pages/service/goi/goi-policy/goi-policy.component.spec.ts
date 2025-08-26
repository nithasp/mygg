import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiPolicyComponent } from './goi-policy.component';

describe('GoiPolicyComponent', () => {
  let component: GoiPolicyComponent;
  let fixture: ComponentFixture<GoiPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiPolicyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
