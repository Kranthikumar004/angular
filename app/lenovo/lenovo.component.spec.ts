import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenovoComponent } from './lenovo.component';

describe('LenovoComponent', () => {
  let component: LenovoComponent;
  let fixture: ComponentFixture<LenovoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenovoComponent]
    });
    fixture = TestBed.createComponent(LenovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
