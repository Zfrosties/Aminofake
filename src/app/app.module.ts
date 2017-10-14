import { AppErrorHandler } from './common/app-error-handler';
import { DataService } from './services/data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FactService } from './fact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { FactComponent } from './fact/fact.component';
import { NavComponent } from './nav/nav.component';
import { SubmitFactComponent } from './submit-fact/submit-fact.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './post/post.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { AutogrowDirective } from './autogrow.directive';
import {MatListModule} from '@angular/material';
import { AddIconComponent } from './add-icon/add-icon.component';
import { DisplayChildDirective } from './display-child.directive';


@NgModule({
  declarations: [
    AppComponent,
    FactComponent,
    NavComponent,
    SubmitFactComponent,
    HomeComponent,
    AboutUsComponent,
    NotFoundComponent,
    PostComponent,
    AutogrowDirective,
    AddIconComponent,
    DisplayChildDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
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
    //{ provide: ErrorHandler, useClass: AppErrorHandler}  //on dis a angular quand tu utilise ErrorHandler utilise AppErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
