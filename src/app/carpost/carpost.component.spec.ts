import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpostComponent } from './carpost.component';

describe('CarpostComponent', () => {
  let component: CarpostComponent;
  let fixture: ComponentFixture<CarpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
