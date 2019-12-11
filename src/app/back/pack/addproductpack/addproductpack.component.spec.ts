import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductpackComponent } from './addproductpack.component';

describe('AddproductpackComponent', () => {
  let component: AddproductpackComponent;
  let fixture: ComponentFixture<AddproductpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
