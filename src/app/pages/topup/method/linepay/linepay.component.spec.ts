import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinepayComponent } from './linepay.component';

describe('LinepayComponent', () => {
  let component: LinepayComponent;
  let fixture: ComponentFixture<LinepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinepayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
