import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { AllComponent } from './pages/exhibitions/all/all.component';
import { DetailsComponent } from './pages/exhibitions/details/details.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'exhibitions',
    component: ExhibitionsComponent,
    children: [
      { path: 'all', component: AllComponent },
      { path: 'details', component: DetailsComponent },
      { path: '', component: AllComponent },
    ],
  },
  {path: 'user' ,component:SignInComponent},
  {path:'favorites' , component:FavoritesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
