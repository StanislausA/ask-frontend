import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionComponent } from './preview-question.component';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/Question';
import { Response } from 'src/app/models/Response';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { element, by } from 'protractor';


describe('PreviewQuestionComponent', () => {
  let component: PreviewQuestionComponent;
  let fixture: ComponentFixture<PreviewQuestionComponent>;

  const res: Response = {
    user: 'smth',
    id: 4,
    responderId: 1,
    questionId: 2,
    body: 'smth',
    creationDate: 'date'
  }

  const ques: Question ={
    id: 201,
    username: 'Mock',
    tags: ['Java' , 'Angular'],
    userId: 203,
    head: 'Mock Header',
    body: 'Mock Body',
    creationDate: 'Mock Date',
    associatedTags: [],
    responses: [],
    highlightedResponseId: res


  }
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const mockQuesService = jasmine.createSpyObj('QuestionService', ['getQuestions']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewQuestionComponent ],
      providers: [ {provide: QuestionService,
        useValue: mockQuesService
      },
      {provide: Router, useValue: routerSpy}
    ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should navigate', () => {

    const q = mockQuesService.jasmine;
    

  });

});

