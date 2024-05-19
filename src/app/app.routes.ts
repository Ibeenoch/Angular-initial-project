import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './components/details/details.component';
import { SigninComponent } from './components/signin/signin.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';

export const routeConfig: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: SigninComponent, title:'Home page'},
    { path: 'details/:id', component: DetailsComponent, title:'Home details'},
    { path: 'profile', component: ProfileComponent},
    { path: 'signup', component: SigninComponent},
    { path: 'pricing', component: PricingComponent},
    { path: 'main', component: MainComponent},
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

export default routeConfig;