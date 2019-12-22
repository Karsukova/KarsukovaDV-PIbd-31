import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarComponent } from './my-bar/my-bar.component';
import { PagepostComponent } from './pagepost/pagepost.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AnimalpostComponent } from './animalpost/animalpost.component';
import { ClothespostComponent } from './clothespost/clothespost.component';
import { WorkpostComponent } from './workpost/workpost.component';
import { CarpostComponent } from './carpost/carpost.component';
import { AdpostComponent } from './adpost/ad-post.component';
import { SearchpostComponent } from './searchpost/searchpost.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './authorization/Components/sign-in/sign-in.component';
import { SignUpComponent } from './authorization/Components/sign-up/sign-up.component';
import {AuthService} from './authorization/services/auth.service';
import { RegistrationComponent } from './registration/registration.component';
//import {BossGuard} from './BossGuard';

@NgModule({
  declarations: [
    AppComponent,
    MyBarComponent,
    PagepostComponent,
    AuthorizationComponent,
    AnimalpostComponent,
    ClothespostComponent,
    AdpostComponent,
    WorkpostComponent,
    CarpostComponent,
    SearchpostComponent,
    SignInComponent,
    SignUpComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
