// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Component,OnInit} from '@angular/core';
import {ApiService} from './api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { CountriesComponent } from './countries/countries.component'; // Import CountriesComponent
import { WeatherComponent } from './weather/weather.component'; // Import WeatherComponent

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent, 
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

