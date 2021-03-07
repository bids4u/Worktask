import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingDetailsComponent } from './costing-details.component';

describe('CostingDetailsComponent', () => {
  let component: CostingDetailsComponent;
  let fixture: ComponentFixture<CostingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
