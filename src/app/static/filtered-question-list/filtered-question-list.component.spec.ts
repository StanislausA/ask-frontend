import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredQuestionListComponent } from './filtered-question-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('FilteredQuestionListComponent', () => {
  let component: FilteredQuestionListComponent;
  let fixture: ComponentFixture<FilteredQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredQuestionListComponent],
      imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test setFilteredStatusAndRefreshQuestions', ()=>{
    component.hasBeenFiltered = true;
    let result = component.setFilteredStatusAndRefreshQuestions(true);
    // let spy =  spyOn(component, 'refreshQuestions');
    // component.setFilteredStatusAndRefreshQuestions(false);
    expect(result).toBeUndefined();
    // expect(spy).toHaveBeenCalled();
  });

  // it('test setQuestionsListWithFilteredUri', ()=>{
  //   let result = component.setQuestionsListWithFilteredUri('test');
  //   expect(result).toBeUndefined();
  // });
  
  // it('test refreshQuestions', ()=>{
  //   let hasBeenFiltered: boolean = false;
  //   let result = component.refreshQuestions();
  //   expect(result).toBeUndefined();
  // });

  // it('test nextPage', ()=>{
  //   let result = component.nextPage();
  //   expect(result).toBeUndefined();
  // });

  it('test previousPage', ()=>{
    let result = component.previousPage();
    expect(result).toBeUndefined();
  });

  it('test onNextPage', ()=>{
    component.pageNumber = 0;
    let result = component.onNextPage();
    component.pageNumber = 5;
    let resultTwo = component.onNextPage();
    expect(result).toBeFalsy();
    expect(resultTwo).toBeTruthy();
  });

});
