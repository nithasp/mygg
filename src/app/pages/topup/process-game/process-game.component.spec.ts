import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessGameComponent } from './process-game.component';

describe('ProcessGameComponent', () => {
  let component: ProcessGameComponent;
  let fixture: ComponentFixture<ProcessGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
