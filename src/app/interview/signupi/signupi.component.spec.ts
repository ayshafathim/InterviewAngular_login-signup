import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupiComponent } from './signupi.component';

describe('SignupiComponent', () => {
  let component: SignupiComponent;
  let fixture: ComponentFixture<SignupiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
