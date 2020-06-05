import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.sass']
})
export class WeatherIconComponent implements OnInit {

  weatherType: string;

  constructor() {
    this.weatherType = 'sun';
  }

  public getWeatherTypeString(): string {
    return `icon-${this.weatherType}`;
  }

  ngOnInit(): void {
  }

}
