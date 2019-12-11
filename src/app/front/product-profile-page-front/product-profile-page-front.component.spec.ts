import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProfilePageFrontComponent } from './product-profile-page-front.component';

describe('ProductProfilePageFrontComponent', () => {
  let component: ProductProfilePageFrontComponent;
  let fixture: ComponentFixture<ProductProfilePageFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductProfilePageFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProfilePageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
