import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {AppRoutingModule} from '@/app-routing.module'
import {AppComponent} from '@/app.component'
import {environment} from '@env/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
