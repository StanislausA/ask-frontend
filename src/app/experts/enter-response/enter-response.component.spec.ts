import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterResponseComponent } from './enter-response.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponseService } from 'src/app/services/response.service';

describe('EnterResponseComponent', () => {
  let component: EnterResponseComponent;
  let fixture: ComponentFixture<EnterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterResponseComponent],
      imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('test updateResponse', ()=>{
  //   let result = component.updateResponse();
  //   expect(result).toBeUndefined();
  // });

  it('test updateResponse', ()=>{
    const service: ResponseService = TestBed.get(ResponseService);
    let result = component.updateResponse();
    // let spy =  spyOn(service, 'updateResponse');
    // component.updateResponse();
    expect(result).toBeUndefined();
    // expect(spy).toHaveBeenCalled();
  });

  it('test addResponse', ()=>{
    let result = component.addResponse('');
    // let spy =  spyOn(service, 'updateResponse');
    // component.updateResponse();
    expect(result).toBeUndefined();
    // expect(spy).toHaveBeenCalled();
  });
});
