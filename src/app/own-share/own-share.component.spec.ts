import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnShareComponent } from './own-share.component';

describe('OwnShareComponent', () => {
  let component: OwnShareComponent;
  let fixture: ComponentFixture<OwnShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
