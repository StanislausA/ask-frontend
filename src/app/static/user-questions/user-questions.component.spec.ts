import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionsComponent } from './user-questions.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

// describe('UserQuestionsComponent', () => {
//   let component: UserQuestionsComponent;
//   let fixture: ComponentFixture<UserQuestionsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UserQuestionsComponent ],
//       imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule], 
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserQuestionsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
