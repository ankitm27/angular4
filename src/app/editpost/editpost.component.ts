import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  editdataresponse;

  constructor(private httpService:HttpService) {

  }

  ngOnInit() {
    this.editdataresponse = new FormGroup({
      postid: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });
  }

  updatePost(data){
    console.log("update post");
    data["userId"] = "1";
    data["postId"] = "1";
    data["postData"] = {text:"sifhywe"};
    data["account"]  = {accountId:"2",accountType:"facebook"};
    data["status"] = "draft";
    data["scheduledAt"] = "28147981273";
    console.log("data",data);
    this.httpService.updatePost(data)
    .then((result) => {
        alert(result);
      }).catch((err) => {
        alert(err);
      })
  }


}
