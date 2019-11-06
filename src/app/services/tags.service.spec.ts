import { TestBed } from '@angular/core/testing';

import { TagService } from './tags.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialImportModule } from 'src/material-import/material-import.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Tag } from '../models/Tag';

describe('TagService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, FormsModule, MaterialImportModule, RouterTestingModule, RouterModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  }));

  it('should be created', () => {
    const service: TagService = TestBed.get(TagService);
    expect(service).toBeTruthy();
  });

  it('test getTags', ()=>{
    const service: TagService = TestBed.get(TagService);
    let result = service.getTags();
    expect(result).toBeTruthy();
  });

  it('test saveExpertTags', ()=>{
    let tags: Tag[];
    let expertId: number = 1;
    const service: TagService = TestBed.get(TagService);
    let result = service.saveExpertTags(tags, expertId);
    expect(result).toBeTruthy();
  });

  it('test getExpertTags', ()=>{
    let expertId: number = 1;
    const service: TagService = TestBed.get(TagService);
    let result = service.getExpertTags(expertId);
    expect(result).toBeTruthy();
  });
});
