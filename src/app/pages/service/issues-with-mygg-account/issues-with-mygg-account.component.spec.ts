import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesWithMyggAccountComponent } from './issues-with-mygg-account.component';

describe('IssuesWithMyggAccountComponent', () => {
  let component: IssuesWithMyggAccountComponent;
  let fixture: ComponentFixture<IssuesWithMyggAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssuesWithMyggAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuesWithMyggAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
