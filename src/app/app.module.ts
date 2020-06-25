import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { environment } from '../environments/environment'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserModule
  ]
})
export class AppModule { }
