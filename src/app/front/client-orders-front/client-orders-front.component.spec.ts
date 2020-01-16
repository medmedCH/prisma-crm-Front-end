import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrdersFrontComponent } from './client-orders-front.component';

describe('ClientOrdersFrontComponent', () => {
  let component: ClientOrdersFrontComponent;
  let fixture: ComponentFixture<ClientOrdersFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrdersFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrdersFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
