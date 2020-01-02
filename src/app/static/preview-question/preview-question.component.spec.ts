import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionComponent } from './preview-question.component';
import { QuestionService } from 'src/app/services/question.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/Question';
import { Response } from 'src/app/models/Response';

const MockResponse: Response = {
  user: 'Mock',
  id: 4,
  responderId: 1,
  questionId: 2,
  body: 'Mock Body',
  creationDate: 'Mock Date'
};
const MockQuestionService: Question = {
  id: 201,
  username: 'Mock',
  tags: ['Java' , 'Angular'],
  userId: 203,
  head: 'Mock Header',
  body: 'Mock Body',
  creationDate: 'Mock Date',
  associatedTags: [],
  responses: [],
  highlightedResponseId: MockResponse
};
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

fdescribe('PreviewQuestionComponent', () => {
  let component: PreviewQuestionComponent;
  let fixture: ComponentFixture<PreviewQuestionComponent>;
  let service: QuestionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewQuestionComponent ],
      providers: [
        {provide: QuestionService, useValue: MockQuestionService},
        {provide: Router, useValue: routerSpy}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuestionComponent);
    component = fixture.componentInstance;
    component.question = MockQuestionService;
    fixture.detectChanges();
    service = TestBed.get(QuestionService);
  });

  // it('should use QuestionService', () => {
  //    service = TestBed.get(QuestionService);
  //    expect(service.getValue()).toBe('real value');
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
