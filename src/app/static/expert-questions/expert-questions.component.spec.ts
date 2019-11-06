import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertQuestionsComponent } from './expert-questions.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

// describe('ExpertQuestionsComponent', () => {
//   let component: ExpertQuestionsComponent;
//   let fixture: ComponentFixture<ExpertQuestionsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ExpertQuestionsComponent ],
//       imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ExpertQuestionsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
