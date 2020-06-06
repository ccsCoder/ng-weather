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
  ) {}

  setWeatherData(weatherData): void {
    const {main, weather, wind} = weatherData;
    // set the values
    this.currTemp = Math.round(main.temp);
    this.maxTemp = Math.round(main.temp_max);
    this.minTemp = Math.round(main.temp_min);
    this.feelsLikeTemp = Math.round(main.feels_like);
    this.description = weather.description;
    this.iconURL = this.weatherIconProviderService.getWeatherIcon(weather[0].icon);
    this.windSpeed = wind.speed;
  }

  getWeatherDetailsForCity(): void {
    // REMOVE THIS:
    this.setWeatherData({
      "coord": {
        "lon": 77.6,
        "lat": 12.98
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 303.22,
        "feels_like": 303.08,
        "temp_min": 302.04,
        "temp_max": 304.26,
        "pressure": 1011,
        "humidity": 48
      },
      "visibility": 10000,
      "wind": {
        "speed": 4.1,
        "deg": 280
      },
      "clouds": {
        "all": 40
      },
      "dt": 1591347750,
      "sys": {
        "type": 1,
        "id": 9205,
        "country": "IN",
        "sunrise": 1591316554,
        "sunset": 1591362839
      },
      "timezone": 19800,
      "id": 1277333,
      "name": "Bengaluru",
      "cod": 200
    });
    // REMOVE THIS:
    // this.weatherService.getCityWeather().subscribe(data => this.setWeatherData(data));
  }

  ngOnInit(): void {
    this.getWeatherDetailsForCity();
  }
}
