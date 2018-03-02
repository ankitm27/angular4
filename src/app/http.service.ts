import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http:Http) {

  }

  //getPosts(): Observable<any[]> {
  //  return this.http.get("http://127.0.0.1:3000/api/getPost?userId=1").
  //    map((response) =>
  //      response.json()).
  //    subscribe((result) => {
  //      console.log("result",result.data);
  //      //return result.data;
  //      return Observable.of(result.data);
  //    })
  //}

  public getPosts(data) {
    console.log("data",data);
    return new Promise((resolve, reject) => {
      let options = { params: data };
      //this.http.get("http://127.0.0.1:3000/api/getPost?userId=" + postId).
      this.http.get("http://127.0.0.1:3000/api/getPost",options).
      toPromise().then((result) => {
          //resolve(JSON.parse(result._body).data);
        }).catch((err) => {
          reject(err);
        })
    })
  }

  public createPost(data) {
    console.log("data",data);
    return new Promise((resolve, reject) => {
      let options = data;
      //this.http.get("http://127.0.0.1:3000/api/getPost?userId=" + postId).
      this.http.post("http://127.0.0.1:3000/api/newPost",options).
        toPromise().then((result) => {
          console.log("result",result);
          //resolve(JSON.parse(result._body).statusCode);
        }).catch((err) => {
          console.log("err",err);
          reject(err);
        })
    })
  }

  public updatePost(data) {
    console.log("data",data);
    return new Promise((resolve, reject) => {
      let options = data;
      //this.http.get("http://127.0.0.1:3000/api/getPost?userId=" + postId).
      this.http.put("http://127.0.0.1:3000/api/updatePost",options).
        toPromise().then((result) => {
          //resolve(JSON.parse(result._body).message);
        }).catch((err) => {
          reject(err.message);
        })
    })
  }

  public updateProfile(data){
    console.log("data",data);
    return new Promise((resolve,reject) => {
      let options = data;
      this.http.put('http://192.168.1.11:3000/account',options).
        toPromise().then((result) => {
          console.log("result",result);
        }).catch((err) => {
          reject(err.message);
        })
    })
  }


}
