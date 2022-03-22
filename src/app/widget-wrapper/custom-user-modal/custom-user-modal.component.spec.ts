import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUserModalComponent } from './custom-user-modal.component';

describe('CustomUserModalComponent', () => {
  let component: CustomUserModalComponent;
  let fixture: ComponentFixture<CustomUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
