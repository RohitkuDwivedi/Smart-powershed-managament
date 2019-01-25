import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerShedModeComponent } from './power-shed-mode.component';

describe('PowerShedModeComponent', () => {
  let component: PowerShedModeComponent;
  let fixture: ComponentFixture<PowerShedModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerShedModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerShedModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
