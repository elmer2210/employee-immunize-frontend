import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserEmplojeeComponent } from './create-user-emplojee.component';

describe('CreateUserEmplojeeComponent', () => {
  let component: CreateUserEmplojeeComponent;
  let fixture: ComponentFixture<CreateUserEmplojeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserEmplojeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserEmplojeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
