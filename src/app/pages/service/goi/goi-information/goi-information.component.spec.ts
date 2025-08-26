import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoiInformationComponent } from './goi-information.component';

describe('GoiInformationComponent', () => {
  let component: GoiInformationComponent;
  let fixture: ComponentFixture<GoiInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoiInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoiInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
