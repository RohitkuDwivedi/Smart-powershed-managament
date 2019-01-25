import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTransformerComponent } from './add-new-transformer.component';

describe('AddNewTransformerComponent', () => {
  let component: AddNewTransformerComponent;
  let fixture: ComponentFixture<AddNewTransformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTransformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTransformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
