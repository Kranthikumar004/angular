import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSComponent } from './ng-s.component';

describe('NgSComponent', () => {
  let component: NgSComponent;
  let fixture: ComponentFixture<NgSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSComponent]
    });
    fixture = TestBed.createComponent(NgSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
