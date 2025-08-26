import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiSpecComponent } from './goi-spec.component';

describe('GoiSpecComponent', () => {
  let component: GoiSpecComponent;
  let fixture: ComponentFixture<GoiSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiSpecComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
