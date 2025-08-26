import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyggBackButtonComponent } from './mygg-back-button.component';

describe('MyggBackButtonComponent', () => {
  let component: MyggBackButtonComponent;
  let fixture: ComponentFixture<MyggBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyggBackButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyggBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
