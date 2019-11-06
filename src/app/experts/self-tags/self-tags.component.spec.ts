import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTagsComponent } from './self-tags.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

// describe('SelfTagsComponent', () => {
//   let component: SelfTagsComponent;
//   let fixture: ComponentFixture<SelfTagsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [SelfTagsComponent],
//       imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SelfTagsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
