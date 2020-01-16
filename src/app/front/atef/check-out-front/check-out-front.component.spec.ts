import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutFrontComponent } from './check-out-front.component';

describe('CheckOutFrontComponent', () => {
  let component: CheckOutFrontComponent;
  let fixture: ComponentFixture<CheckOutFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
