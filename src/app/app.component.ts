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
  currTemp: number = null;
  maxTemp: number = null;
  minTemp: number = null;
  feelsLikeTemp: number = null;
  description: string = null;
  iconURL: string = null;
  windSpeed: number = null;
  city: string = null;

  constructor(
    private weatherService: WeatherService,
    private weatherIconProviderService: WeatherIconProviderService
  ) { }

  citySelectedHandler($event): void {
    this.city = $event;
    this.getWeatherDetailsForCity();
  }

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
    this.weatherService.getCityWeather(this.city).subscribe(data => this.setWeatherData(data));
  }

  ngOnInit(): void {
  }
}
