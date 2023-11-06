// src/app/weather/weather.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    const country = this.route.snapshot.paramMap.get('country');
    if (country) {
      this.apiService.getWeather(country).then((observable)=>observable.subscribe((data:any) => {
        this.weather = data;
        console.log("error in this code");
        
      }));
    } else {
      console.error('Country not specified');
    }
  }
  
}

