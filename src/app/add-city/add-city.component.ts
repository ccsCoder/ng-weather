import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {

  cities: string[];

  constructor(private weatherService: WeatherService) {
  }

  setCities(cityData): void {
    this.cities = cityData.map(datum => `${datum.name}, ${datum.country.id}`);
    console.log(this.cities);
  }

  onCityInput(cityName): void {
    if (cityName.length < 3) {
      return;
    }
    this.weatherService.getCityNames(cityName).pipe(debounceTime(1000)).subscribe(cityData => {
      this.setCities(cityData);
    });

  }

  ngOnInit(): void {
  }

}
