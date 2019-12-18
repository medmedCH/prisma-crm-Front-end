import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserenpromotionComponent } from './passerenpromotion.component';

describe('PasserenpromotionComponent', () => {
  let component: PasserenpromotionComponent;
  let fixture: ComponentFixture<PasserenpromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasserenpromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasserenpromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
