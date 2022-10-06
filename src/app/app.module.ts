import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {reducer} from "./car/car/store/car.reducer";
import {LetModule} from "@ngrx/component";
import {CarModule} from "./car/car/car.module";
import {environment} from "../environments/environment";
import {EntityDataModule, HttpUrlGenerator} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import {CustomurlHttpGenerator} from "./teste-let-directive/store/customurl-http-generator";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({cars: reducer, router: routerReducer}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    RouterModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,
    LetModule,
    CarModule,
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: CustomurlHttpGenerator,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
