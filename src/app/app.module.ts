import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http"
import { ApiInterceptor } from './api.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [HttpClient, { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
