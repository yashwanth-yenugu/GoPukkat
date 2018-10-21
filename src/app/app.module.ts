import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginOrSignupComponent } from './components/login-or-signup/login-or-signup.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/footer/footer.component';
import { goPukkatRoutes } from './app.routers';

@NgModule({
  declarations: [
    AppComponent,
    LoginOrSignupComponent,
    HeaderComponent,
    ContentWrapperComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    goPukkatRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
