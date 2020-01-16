import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceClientTemporaryComponent } from './invoice-client-temporary.component';

describe('InvoiceClientTemporaryComponent', () => {
  let component: InvoiceClientTemporaryComponent;
  let fixture: ComponentFixture<InvoiceClientTemporaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceClientTemporaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceClientTemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
