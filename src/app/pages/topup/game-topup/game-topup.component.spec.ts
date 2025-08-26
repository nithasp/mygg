import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTopupComponent } from './game-topup.component';

describe('GameTopupComponent', () => {
  let component: GameTopupComponent;
  let fixture: ComponentFixture<GameTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameTopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
