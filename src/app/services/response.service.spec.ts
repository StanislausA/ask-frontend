import { TestBed } from '@angular/core/testing';

import { ResponseService } from './response.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('ResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule, BrowserAnimationsModule, BrowserDynamicTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: ResponseService = TestBed.get(ResponseService);
    expect(service).toBeTruthy();
  });

  it('test getResponses', ()=>{
    const service: ResponseService = TestBed.get(ResponseService);
    let result = service.getResponses();
    expect(result).toBeTruthy();
  })

  it('test getResponseById', ()=>{
    const service: ResponseService = TestBed.get(ResponseService);
    let result = service.getResponseById(1);
    expect(result).toBeTruthy();
  })
});