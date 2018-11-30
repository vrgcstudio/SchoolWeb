import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcarStudentComponent } from './searchcar-student.component';

describe('SearchcarStudentComponent', () => {
  let component: SearchcarStudentComponent;
  let fixture: ComponentFixture<SearchcarStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcarStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcarStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
