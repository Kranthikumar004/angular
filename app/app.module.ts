import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSComponent } from './ng-s/ng-s.component';
import { LenovoComponent } from './lenovo/lenovo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSComponent,
    LenovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
