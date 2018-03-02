import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CheckService } from './check.service';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { NameofthedirectiveDirective } from './nameofthedirective.directive';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { PostComponent } from './post/post.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    NameofthedirectiveDirective,
    ChangeTextDirective,
    SqrtPipe,
    PostComponent,
    CreatepostComponent,
    EditpostComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{
      //  path: 'new-cmp',
      //  component: CheckComponent
      //},
      {
        path:'post',
        component:PostComponent,
        children:[
          {
            path:'new',
            component:CreatepostComponent
          },
          {
            path:'edit',
            component:EditpostComponent
          }
        ],
        //pathMatch:"full"
      },
      {
        path:'profile',
        component:ProfileComponent,
        children:[
          {
            path:'edit',
            component:ProfileComponent
          }
        ]
      },
      {
        path:"**",
        redirectTo:"/"
      }
    ]),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
