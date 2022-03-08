import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import  AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DummyPostItemComponent } from './home-page/dummy-post-item/dummy-post-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './template-forms/login/login.component';
import { SignUpComponent } from './template-forms/sign-up/sign-up.component';
import {MatInputModule,} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutUsComponent,
    DummyPostItemComponent,
    NotFoundComponent,
    PostsComponent,
    TemplateFormsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
