import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPointComponent } from './map-point.component';

describe('MapPointComponent', () => {
  let component: MapPointComponent;
  let fixture: ComponentFixture<MapPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
