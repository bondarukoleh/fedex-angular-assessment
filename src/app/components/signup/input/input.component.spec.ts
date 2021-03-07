import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ControlContainer} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import {InputComponent} from './input.component';
import {configureTestSuite} from 'ng-bullet';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  const inputsData = [
    {dataName: 'iconClass', dataValue: 'fa fa-user', elementName: 'i', attributeName: 'class'},
    {dataName: 'name', dataValue: 'firstName', elementName: 'input', attributeName: 'name'},
    {dataName: 'placeholder', dataValue: 'First Name', elementName: 'input', attributeName: 'placeholder'},
    {dataName: 'type', dataValue: 'text', elementName: 'input', attributeName: 'type'},
  ];

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [],
      providers: [ControlContainer],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    inputsData.forEach(({dataName, dataValue}) => component[dataName] = dataValue);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toBeTruthy(`Input should be created`);
  });

  for (const {dataName, dataValue, attributeName, elementName} of inputsData) {
    it(`should set the input property ${dataName}`, () => {
      const elem = fixture.debugElement.nativeElement.querySelector(elementName);
      const attribute = elem.getAttribute(attributeName);
      expect(attribute).toEqual(dataValue, `Attribute "${attribute}" should be equal "${dataValue}"`);
    });
  }
});


