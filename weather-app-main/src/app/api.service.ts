// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async getCountries() {
    const capi=await this.http.get('https://countriesnow.space/api/v0.1/countries');
    console.log(capi);
    return capi;
    
  }

  async getWeather(country: string) {
    return await this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425`);
  }
}


