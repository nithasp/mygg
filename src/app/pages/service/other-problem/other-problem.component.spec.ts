import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProblemComponent } from './other-problem.component';

describe('OtherProblemComponent', () => {
  let component: OtherProblemComponent;
  let fixture: ComponentFixture<OtherProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherProblemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
