import { Component }from '@angular/core';
import { CheckService } from './check.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").
      map((response) => response.json()).
      subscribe((result) => {
        this.displaydata(result);
      })
  }
  displaydata(data) {
    console.log("data",data);
    this.httpdata = data;
  }
  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
  }
}
