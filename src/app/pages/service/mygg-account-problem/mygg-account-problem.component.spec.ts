import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyggAccountProblemComponent } from './mygg-account-problem.component';

describe('MyggAccountProblemComponent', () => {
  let component: MyggAccountProblemComponent;
  let fixture: ComponentFixture<MyggAccountProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyggAccountProblemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyggAccountProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
