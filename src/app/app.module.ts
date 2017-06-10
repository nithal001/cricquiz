import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { ApiService } from './shared';
import { AuthGuard } from './_guards/auth.guard';
import { AlertComponent } from './_directive/alert.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CarouselModule.forRoot(),
    routing,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeCarouselComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [
    ApiService,
    AlertService,
    AuthGuard,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
