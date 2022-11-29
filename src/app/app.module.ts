import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
const myRouter:Routes=[
  {
    path:"",
    component:AddPostComponent
  },
  {
    path:"view",
    component:ViewPostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewPostComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
