import { Component, OnInit, Input, Output } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from 'src/app/services/response.service';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  @Input() response: Response;

  responses: Response[];
  isEdit: boolean = false;
  responderName: string;
  expertTags = [];
  hoverToggle: boolean = false;

  // Only the user who asked the question can highlight a response
  currentQuestionerId: number;
  currentUserId: any;
  currentQuestionObject: any;
  env = environment.questionsUri;

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private responseService: ResponseService,
    private router: Router,
  ) {}

  // Using a PATCH method to update the question with a highlighted response
  // Only one highlighted response per question
  highlightResponse = (event, selectedResponse) => {
    this.http
      .patch(
        `${this.env}/${this.response.questionId}/highlightedResponseId`,
        selectedResponse,
      )
      .subscribe(
        data => {
          this._snackBar.open('Highlighted Answer', 'OK', {
            duration: 2000,
          });
          this.router.navigate(['/user-questions']);
        },
        error => {
          this._snackBar.open('Highlight unsuccessful', 'OK', {
            duration: 3000,
          });
        },
      );
  };

  onNewResponse(response: Response) {
    this.responses.unshift(response);
  }

  editResponse(response: Response) {
    this.response = response;
    this.isEdit = true;
  }

  onUpdatedResponse(response: Response) {
    this.responses.forEach((cur, index) => {
      if (response.id === cur.id) {
        this.responses.splice(index, 1);
        this.responses.unshift(response);
        this.isEdit = false;
        this.response = {
          user: null,
          id: 0,
          responderId: 0,
          questionId: 0,
          body: '',
          creationDate: '',
        };
      }
    });
  }

  removeResponse(response: Response) {
    if (confirm('Are You Sure ?')) {
      this.responseService.removeResponse(response.id).subscribe(() => {
        this.responses.forEach((cur, index) => {
          if (response.id === cur.id) {
            this.responses.splice(index, 1);
          }
        });
      });
    }
  }

  ngOnInit() {
    this.responseService.getResponses().subscribe(responses => {
      this.responses = responses;
    });

    // Retrieves the response ID for each ResponseComponent
    // Used for displaying the expert's username that entered the response and their tags
    this.responseService.getResponseById(this.response.id).subscribe(result => {
      this.responderName = result.user.username;
      this.expertTags = result.user.expertTags;
    });

    // Retrieves the selected question ID
    // Used for coupling the highlighted response to its question
    let observable = this.http.get(
      `${environment.questionsUri}/${this.questionService.getQuestionId()}`,
    );
    observable.subscribe(result => {
      this.currentQuestionObject = result;
      this.currentQuestionerId = this.currentQuestionObject.questionerId;
      this.currentUserId = this.authService.account.id;
    });
  }
}
