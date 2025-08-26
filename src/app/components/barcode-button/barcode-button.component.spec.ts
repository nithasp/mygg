import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeButtonComponent } from './barcode-button.component';

describe('BarcodeButtonComponent', () => {
  let component: BarcodeButtonComponent;
  let fixture: ComponentFixture<BarcodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarcodeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarcodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
