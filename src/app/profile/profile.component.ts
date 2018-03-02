import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editprofileresponse;

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.editprofileresponse = new FormGroup({

      postid: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });
  }


  updateProfile(data){
    console.log("update post");
    data["userId"] = "1";
    data["name"] = "check";
    data["email"] = "check@check.com";
    data["gender"] = "male";
    console.log("data",data);
    this.httpService.updateProfile(data)
      .then((result) => {
        console.log("result",result);
        alert(result);
      }).catch((err) => {
        console.log("err",err);
        alert(err);
      })
  }
}

