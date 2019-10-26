import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpostComponent } from './workpost.component';

describe('WorkpostComponent', () => {
  let component: WorkpostComponent;
  let fixture: ComponentFixture<WorkpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
