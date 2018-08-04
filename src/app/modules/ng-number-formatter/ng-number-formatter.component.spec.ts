import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNumberFormatterComponent } from './ng-number-formatter.component';

describe('NgNumberFormatterComponent', () => {
  let component: NgNumberFormatterComponent;
  let fixture: ComponentFixture<NgNumberFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNumberFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNumberFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
