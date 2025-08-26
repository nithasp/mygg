import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToTopupMyggComponent } from './how-to-topup-mygg.component';

describe('HowToTopupMyggComponent', () => {
  let component: HowToTopupMyggComponent;
  let fixture: ComponentFixture<HowToTopupMyggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowToTopupMyggComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowToTopupMyggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
