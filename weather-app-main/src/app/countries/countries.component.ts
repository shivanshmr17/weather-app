// src/app/countries/countries.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCountries().then((o)=>o.subscribe((data) => {
      this.countries = data;
    }));
  }
}

