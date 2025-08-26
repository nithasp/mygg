import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BualuangToGameComponent } from './bualuang-to-game.component';

describe('BualuangToGameComponent', () => {
  let component: BualuangToGameComponent;
  let fixture: ComponentFixture<BualuangToGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BualuangToGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BualuangToGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
