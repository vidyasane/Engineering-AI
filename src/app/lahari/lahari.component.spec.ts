import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LahariComponent } from './lahari.component';

describe('LahariComponent', () => {
  let component: LahariComponent;
  let fixture: ComponentFixture<LahariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LahariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LahariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
