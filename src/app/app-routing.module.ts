import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { AllComponent } from './pages/exhibitions/all/all.component';
import { DetailsComponent } from './pages/exhibitions/details/details.component';

import { UserComponent } from './pages/user/user.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'exhibitions',
    component: ExhibitionsComponent,
    children: [
      { path: 'all', component: AllComponent },
      { path: ':id', component: DetailsComponent },
      { path: '', component: AllComponent ,  pathMatch:'full' },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: SignInComponent  , pathMatch:'full'},
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
