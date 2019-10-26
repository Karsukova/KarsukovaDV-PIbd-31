import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationComponent} from './authorization/authorization.component';
import { AppComponent } from './app.component';
import { MyBarComponent } from './my-bar/my-bar.component';
import { PagepostComponent } from './pagepost/pagepost.component';
import { AnimalpostComponent } from './animalpost/animalpost.component';
import {ClothespostComponent} from './clothespost/clothespost.component';
import {WorkpostComponent} from './workpost/workpost.component';
import {CarpostComponent} from './carpost/carpost.component';
import {AdpostComponent} from './adpost/adpost.component';
import {SearchpostComponent} from './searchpost/searchpost.component';


const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent },
  { path: 'page', component: PagepostComponent },
  {path: 'animal', component: AnimalpostComponent },
  {path: 'clothes', component: ClothespostComponent},
  {path: 'work', component: WorkpostComponent},
  {path: 'car', component: CarpostComponent},
  {path: 'ad', component: AdpostComponent},
  {path: 'search', component: SearchpostComponent},
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
