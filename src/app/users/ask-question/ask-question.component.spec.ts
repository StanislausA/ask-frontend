import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionComponent } from './ask-question.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuestionComponent ],
      imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test clearForm', ()=>{
    const service: FormBuilder = TestBed.get(FormBuilder);
    let result = component.clearForm();
    let spy = spyOn(service, 'group');
    component.clearForm();
    expect(result).toBeUndefined();
    expect(spy).toHaveBeenCalled();
  });

  it('test sendImage', ()=>{
    let result = component.sendImage();
    expect(result).toBeUndefined();
  });

  it('test remove', ()=>{
    let tag: string = '';
    let result = component.remove(tag);
    expect(result).toBeUndefined();
  });

  // it('test add', ()=>{
  //   let event: MatChipInputEvent;
  //   let result = component.add(event);
  //   expect(result).toBeUndefined();
  // });

});
