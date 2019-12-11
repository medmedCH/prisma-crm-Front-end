import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineInvoiceFrontComponent } from './online-invoice-front.component';

describe('OnlineInvoiceFrontComponent', () => {
  let component: OnlineInvoiceFrontComponent;
  let fixture: ComponentFixture<OnlineInvoiceFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineInvoiceFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineInvoiceFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
