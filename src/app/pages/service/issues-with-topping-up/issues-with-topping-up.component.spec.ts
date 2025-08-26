import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesWithToppingUpComponent } from './issues-with-topping-up.component';

describe('IssuesWithToppingUpComponent', () => {
  let component: IssuesWithToppingUpComponent;
  let fixture: ComponentFixture<IssuesWithToppingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesWithToppingUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuesWithToppingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
