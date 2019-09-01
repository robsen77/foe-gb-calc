import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbCalcComponent } from './gb-calc.component';

describe('GbCalcComponent', () => {
  let component: GbCalcComponent;
  let fixture: ComponentFixture<GbCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
