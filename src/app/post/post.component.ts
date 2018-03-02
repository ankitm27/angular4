import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Observable } from "rxjs/Rx"
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postResponse;
  errorMessage;
  isDataAvailable = false;
  isSuccess = false;
  formdata;
  constructor(private myservice:HttpService) {

  }

  public ngOnInit() {
    this.formdata = new FormGroup({
      postid: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });

    let userId = localStorage.getItem('userId');

    this.myservice.getPosts({userId:userId})
    .then((result) => {
        localStorage.setItem('post',JSON.stringify(result));
        result = JSON.parse(localStorage.getItem('post'));
        this.postResponse = result;
        this.isDataAvailable = true;
        this.isSuccess = true;
      }).catch((err) => {
        this.errorMessage = err;
        this.isDataAvailable = false;
        this.isSuccess = false;
      })
  }
  //onClickSubmit(data) {this.emailid = data.emailid;}

}
