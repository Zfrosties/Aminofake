import { AppErrorHandler } from './common/app-error-handler';
import { DataService } from './services/data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FactService } from './fact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


=======
>>>>>>> 7d981623aa1c7318d069dab3c41a0ee9236d5270
import { FactComponent } from './fact/fact.component';
import { NavComponent } from './nav/nav.component';
import { SubmitFactComponent } from './submit-fact/submit-fact.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    FactComponent,
    NavComponent,
    SubmitFactComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule, 
    HttpModule,
=======
>>>>>>> 7d981623aa1c7318d069dab3c41a0ee9236d5270
    RouterModule.forRoot([
      {
        path: '' ,
        component: HomeComponent
      },
      {
        path: 'facts' ,
        component: FactComponent
      },
      {
        path: 'submit-fact' ,
        component: SubmitFactComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: '**' ,
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    FactService,
    DataService,
    { provide: ErrorHandler, useClass: AppErrorHandler}  //on dis a angular quand tu utilise ErrorHandler utilise AppErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
