import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AppComponent} from './app.component';
import {MyBarComponent} from './my-bar/my-bar.component';
import {PagepostComponent} from './pagepost/pagepost.component';
import {AnimalpostComponent} from './animalpost/animalpost.component';
import {ClothespostComponent} from './clothespost/clothespost.component';
import {WorkpostComponent} from './workpost/workpost.component';
import {CarpostComponent} from './carpost/carpost.component';
import {AdpostComponent} from './adpost/ad-post.component';
import {SearchpostComponent} from './searchpost/searchpost.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SignInComponent} from './authorization/Components/sign-in/sign-in.component';
import {SignUpComponent} from './authorization/Components/sign-up/sign-up.component';
import {RegistrationComponent} from './registration/registration.component';
import {BossGuard} from './BossGuard';
import {AdService} from './adpost/Service/AdService';
//import {BossGuard} from './BossGuard';


const routes: Routes = [
  {path: 'auth', component: AuthorizationComponent},
  {path: 'page', component: PagepostComponent},
  {path: 'animal', component: AnimalpostComponent},
  {path: 'clothes', component: ClothespostComponent},
  {path: 'work', component: WorkpostComponent},
  {path: 'car', component: CarpostComponent},
  {path: 'ad', component: AdpostComponent, canActivate: [BossGuard]},
  {path: 'search', component: SearchpostComponent},
  {path: 'login', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BossGuard, AdService]
})
export class AppRoutingModule {

}
