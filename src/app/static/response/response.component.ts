import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../models/Response';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  @Input() response: Response = {
    id: 2,
    responderId: 3,
    questionId: 3,
    body: '',
    creationDate: ''
  };

  constructor() {}

  ngOnInit() {}
}
