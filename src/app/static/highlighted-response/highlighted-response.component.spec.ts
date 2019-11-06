import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedResponseComponent } from './highlighted-response.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

// describe('HighlightedResponseComponent', () => {
//   let component: HighlightedResponseComponent;
//   let fixture: ComponentFixture<HighlightedResponseComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HighlightedResponseComponent ],
//       imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HighlightedResponseComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
