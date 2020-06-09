import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconProviderService {
  iconMap: Record<string, string>;

  constructor() {
    this.iconMap = {
      '03d': 'windy',
      '03n': 'windy',
      '04n': 'clouds',
      '04d': 'clouds-inv',
      '13d': 'snow-alt',
      '13n': 'snow',
      '02n': 'cloud',
      '02d': 'cloud-inv',
      '01d': 'sun',
      '01n': 'moon',
      '50d': 'mist',
      '50n': 'mist',
      '10d': 'hail',
      '10n': 'hail-inv',
      celcius: 'celcius',
      '11n': 'clouds-flash-alt',
      '11d': 'cloud-flash-inv',
      '09d': 'rain-inv',
      '09n': 'rain',
    };
  }

  getWeatherIcon(iconCode: string): string {
    return `icon-${this.iconMap[iconCode]}`;
  }

}
