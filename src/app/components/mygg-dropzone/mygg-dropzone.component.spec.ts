import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyggDropzoneComponent } from './mygg-dropzone.component';

describe('MyggDropzoneComponent', () => {
  let component: MyggDropzoneComponent;
  let fixture: ComponentFixture<MyggDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyggDropzoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyggDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
