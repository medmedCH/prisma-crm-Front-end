import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceClientPermanentComponent } from './invoice-client-permanent.component';

describe('InvoiceClientPermanentComponent', () => {
  let component: InvoiceClientPermanentComponent;
  let fixture: ComponentFixture<InvoiceClientPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceClientPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceClientPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
