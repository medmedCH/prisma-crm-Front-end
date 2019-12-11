import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsIndexFrontContentComponent } from './products-index-front-content.component';

describe('ProductsIndexFrontContentComponent', () => {
  let component: ProductsIndexFrontContentComponent;
  let fixture: ComponentFixture<ProductsIndexFrontContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsIndexFrontContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsIndexFrontContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
