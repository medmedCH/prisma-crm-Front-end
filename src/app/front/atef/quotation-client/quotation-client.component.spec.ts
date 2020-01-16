import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationClientComponent } from './quotation-client.component';

describe('QuotationClientComponent', () => {
  let component: QuotationClientComponent;
  let fixture: ComponentFixture<QuotationClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
