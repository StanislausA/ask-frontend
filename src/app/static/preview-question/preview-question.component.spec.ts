import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionComponent } from './preview-question.component';
import { QuestionService } from 'src/app/services/question.service';

fdescribe('PreviewQuestionComponent', () => {
  let component: PreviewQuestionComponent;
  let fixture: ComponentFixture<PreviewQuestionComponent>;
  let service: QuestionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewQuestionComponent ],
       providers: [QuestionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuestionComponent);
    component = fixture.componentInstance;
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
