import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherIconProviderService } from './weather-icon-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [WeatherService, WeatherIconProviderService]
})
export class AppComponent implements OnInit {
  currTemp: number;
  maxTemp: number;
  minTemp: number;
  feelsLikeTemp: number;
  description: string;
  iconURL: string;
  windSpeed: number;

  constructor(
    private weatherService: WeatherService,
    private weatherIconProviderService: WeatherIconProviderService
  ) { }

  // private convertToCelcius(kelvin: number): number {
  //   return Math.round(kelvin - 273.15);
  // }

  setWeatherData(weatherData): void {
    const { main, weather, wind } = weatherData;
    // set the values
    this.currTemp = Math.round(main.temp);
    this.maxTemp = Math.round(main.temp_max);
    this.minTemp = Math.round(main.temp_min);
    this.feelsLikeTemp = Math.round(main.feels_like);
    this.description = weather[0].description;
    this.iconURL = this.weatherIconProviderService.getWeatherIcon(weather[0].icon);
    this.windSpeed = Math.round(wind.speed);
  }

  getWeatherDetailsForCity(): void {
    // REMOVE THIS:
    this.setWeatherData({ "coord": { "lon": 77.6, "lat": 12.98 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }], "base": "stations", "main": { "temp": 29.17, "feels_like": 30.18, "temp_min": 28.33, "temp_max": 30.56, "pressure": 1010, "humidity": 54 }, "visibility": 8000, "wind": { "speed": 3.1, "deg": 290 }, "clouds": { "all": 40 }, "dt": 1591530892, "sys": { "type": 1, "id": 9205, "country": "IN", "sunrise": 1591489362, "sunset": 1591535673 }, "timezone": 19800, "id": 1277333, "name": "Bengaluru", "cod": 200 });
    // REMOVE THIS:
    // this.weatherService.getCityWeather().subscribe(data => this.setWeatherData(data));
  }

  ngOnInit(): void {
    this.getWeatherDetailsForCity();
  }
}
