import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BiznewsComponent } from './biznews/biznews.component';
import { DigicellComponent } from './digicell/digicell.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BiznewsComponent,
    DigicellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
