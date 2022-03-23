import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ActivityModule } from './Activity/activity.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ActivityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
