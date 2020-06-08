import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  apiKey = 'd0d05561695e5b01f24a377d11030327';
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric`;
  geoApiUrl = `https://spott.p.rapidapi.com/places/autocomplete?q=Haza&limit=5&type=CITY`;

  // This is only for now, as the city will actually be fetched from a service.
  city: string;

  constructor(private httpClient: HttpClient) {
    this.city = 'Bengaluru';
  }

  getCityWeather() {
    return this.httpClient.get(`${this.apiUrl}&q=${this.city}`);
  }

  getCityNames(prefix: string) {
    return this.httpClient.get(
      `${this.geoApiUrl}&q=${prefix}`,
      {
        headers: {
          'x-rapidapi-host': 'spott.p.rapidapi.com',
          'x-rapidapi-key': 'EEEfKAkAYRmshOjhWYalF4rn9V3Fp1gxrcMjsnusBVWNZmicZ4'
        }
      }
    );
  }
}
