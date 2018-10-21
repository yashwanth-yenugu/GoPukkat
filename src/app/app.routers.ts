import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginOrSignupComponent } from './components/login-or-signup/login-or-signup.component';

export const appRoutes: Routes = [
 
    { 
        path: 'login', component: LoginOrSignupComponent},


];

export const goPukkatRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);