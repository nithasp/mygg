import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinToGameComponent } from './coin-to-game.component';

describe('CoinToGameComponent', () => {
  let component: CoinToGameComponent;
  let fixture: ComponentFixture<CoinToGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinToGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoinToGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
