import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprodenpromotionComponent } from './showprodenpromotion.component';

describe('ShowprodenpromotionComponent', () => {
  let component: ShowprodenpromotionComponent;
  let fixture: ComponentFixture<ShowprodenpromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowprodenpromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprodenpromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
