import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnShareTableComponent } from './own-share-table.component';

describe('OwnShareTableComponent', () => {
  let component: OwnShareTableComponent;
  let fixture: ComponentFixture<OwnShareTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnShareTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnShareTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
