import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalpostComponent } from './animalpost.component';

describe('AnimalpostComponent', () => {
  let component: AnimalpostComponent;
  let fixture: ComponentFixture<AnimalpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
