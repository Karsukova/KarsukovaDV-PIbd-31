import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothespostComponent } from './clothespost.component';

describe('ClotherpostComponent', () => {
  let component: ClothespostComponent;
  let fixture: ComponentFixture<ClothespostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothespostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothespostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
