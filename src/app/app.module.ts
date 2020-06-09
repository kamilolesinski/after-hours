import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ]
})
export class AppModule { }
