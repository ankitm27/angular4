import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  createpostdata;
  accounts = [1,2,3,4,5];
  status = ["draft","confirmed"];

  constructor(private httpService:HttpService) {

  }

  ngOnInit() {
    this.createpostdata = new FormGroup({

      postid: new FormControl("", Validators.compose([
        Validators.required,
      ])),

      text: new FormControl("", Validators.compose([
        Validators.required,
      ])),

      account: new FormControl("",Validators.compose([
        Validators.required,
      ])),

      status: new FormControl("", Validators.compose([
        Validators.required,
      ]))
    });
  }

  createPost(data){
    let reqData = {};
    //reqData["postId"] = data.postid;
    //reqData["scheduledAt"] = "287438974";
    //reqData.account = {accountId:data.account,accountType:data.accountType};
    //reqData.postData = {};
    let userId = localStorage.getItem('userId');
    //reqData.userId = userId;
    //reqData.status = data.status;
    this.httpService.createPost(reqData)
    .then((result) => {
        console.log("result",result);
      }).catch((err) => {
        console.log("err",err);
      })

  }

}
