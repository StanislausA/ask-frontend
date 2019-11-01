import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/Tag';
import { environment } from '../../../environments/environment';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SelfTagsComponent } from '../self-tags/self-tags.component';



@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css'],
})
export class TagCreationComponent implements OnInit {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private selfTags: SelfTagsComponent) {}
  tag: Tag = { id: 0, name: '' };

  ngOnInit() {}

  onSubmit() {
    this.http.post(environment.tagsUri, this.tag).subscribe(
      result => {
        this.selfTags.ngOnInit();
        this.tag.name = "";
        this._snackBar.open(`Tag Created`, `OK`, { duration: 2000 });
      },
      error => {
        this._snackBar.open(`Failed to Create Tag`, `OK`, { duration: 2000 });
      },
    );
  }
}
