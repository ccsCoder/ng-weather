import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  apiKey = 'd0d05561695e5b01f24a377d11030327';
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric`;
  // This is only for now, as the city will actually be fetched from a service.
  city: string;

  constructor(private httpClient: HttpClient) {
    this.city = 'Bengaluru';
  }

  getCityWeather() {
    return this.httpClient.get(`${this.apiUrl}&q=${this.city}`);
  }
}
