import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionCostComponent } from './addition-cost.component';

describe('AdditionCostComponent', () => {
  let component: AdditionCostComponent;
  let fixture: ComponentFixture<AdditionCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
