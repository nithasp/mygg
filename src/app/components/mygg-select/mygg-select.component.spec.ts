import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyggSelectComponent } from './mygg-select.component';

describe('MyggSelectComponent', () => {
  let component: MyggSelectComponent;
  let fixture: ComponentFixture<MyggSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyggSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyggSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
