import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab401Component } from './tab401.component';

describe('Tab401Component', () => {
  let component: Tab401Component;
  let fixture: ComponentFixture<Tab401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
