import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Affiche1Component } from './affiche1.component';

describe('Affiche1Component', () => {
  let component: Affiche1Component;
  let fixture: ComponentFixture<Affiche1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Affiche1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Affiche1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
