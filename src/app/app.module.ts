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
import { AdpostComponent } from './adpost/adpost.component';
import { SearchpostComponent } from './searchpost/searchpost.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarComponent,
    PagepostComponent,
    AuthorizationComponent,
    AnimalpostComponent,
    ClothespostComponent,
    WorkpostComponent,
    CarpostComponent,
    AdpostComponent,
    SearchpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
