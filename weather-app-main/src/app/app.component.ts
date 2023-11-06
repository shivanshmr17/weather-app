import { Component,OnInit} from '@angular/core';
import {ApiService} from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component'; // Import CountriesComponent
import { WeatherComponent } from './weather/weather.component'; // Import WeatherComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  countryData: any = null;
  constructor(private api:ApiService) {}
 
}



