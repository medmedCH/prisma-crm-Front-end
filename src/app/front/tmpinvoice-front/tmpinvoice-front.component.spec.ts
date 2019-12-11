import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpinvoiceFrontComponent } from './tmpinvoice-front.component';

describe('TmpinvoiceFrontComponent', () => {
  let component: TmpinvoiceFrontComponent;
  let fixture: ComponentFixture<TmpinvoiceFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmpinvoiceFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmpinvoiceFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
