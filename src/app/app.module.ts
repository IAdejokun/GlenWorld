import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { SkeletonHomeComponent } from './home/skeleton-home/skeleton-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHomeComponent,
    SkeletonHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
