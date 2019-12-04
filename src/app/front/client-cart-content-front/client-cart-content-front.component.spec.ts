import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCartContentFrontComponent } from './client-cart-content-front.component';

describe('ClientCartContentFrontComponent', () => {
  let component: ClientCartContentFrontComponent;
  let fixture: ComponentFixture<ClientCartContentFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCartContentFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCartContentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
