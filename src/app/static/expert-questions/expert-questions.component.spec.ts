import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { MatSnackBar, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { asyncData } from 'src/test';
import { ExpertQuestionsComponent } from './expert-questions.component';
import { QuestionListComponent } from '../question-list/question-list.component';
import { PreviewQuestionComponent } from '../preview-question/preview-question.component';
import { SkilltagPipe } from '../response/skilltag.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExpertQuestionsComponent', () => {
  it('should create', () => {
    let questions: Question[];

    TestBed.configureTestingModule({
      declarations: [ExpertQuestionsComponent, PreviewQuestionComponent, QuestionListComponent, SkilltagPipe],
      imports: [HttpClientTestingModule, OverlayModule, FormsModule, MatIconModule, MatButtonModule, RouterTestingModule],
      providers: [MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    const fixture = TestBed.createComponent(ExpertQuestionsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});



