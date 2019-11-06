import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFilterComponent } from './question-filter.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('QuestionFilterComponent', () => {
  let component: QuestionFilterComponent;
  let fixture: ComponentFixture<QuestionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFilterComponent ],
      imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test remove', ()=>{
    let tag: string = '';
    let result = component.remove(tag);
    expect(result).toBeUndefined();
  });

  it('test createFilteredQuestionsUri', ()=>{
    let result = component.createFilteredQuestionsUri();
    expect(result).toBeUndefined();
  });

  it('test hasBeenFiltered', ()=>{
    let result = component.hasBeenFiltered();
    expect(result).toBeDefined();
  });

  it('test resetSearch', ()=>{
    let result = component.resetSearch();
    expect(result).toBeUndefined();
  });
});
