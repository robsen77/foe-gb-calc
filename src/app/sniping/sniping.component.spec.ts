import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnipingComponent } from './sniping.component';

describe('SnipingComponent', () => {
  let component: SnipingComponent;
  let fixture: ComponentFixture<SnipingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnipingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
