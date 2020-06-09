import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.sass']
})
export class AddCityComponent implements OnInit {

  @Output()
  citySelectionPerformed: EventEmitter<string> = new EventEmitter<string>();

  cities: string[];
  searchTextChanged = new Subject<string>();
  message = '';
  isError = false;
  selectedCity = null;

  constructor(private weatherService: WeatherService) {}

  fetchCities(cityPrefix: string): void {
    // dont make any server call for < 3 characters
    if (cityPrefix.trim().length < 3) {
      this.isError = true;
      this.message = 'Please type 3 or more characters to search';
      return;
    }
    this.weatherService.getCityNames(cityPrefix).subscribe((cityData: string[])  => {
      if (cityData.length === 0) {
        this.message = 'No Cities found with that name.';
        this.isError = true;
        this.setCities([]);
        return;
      }
      this.message = '';
      this.isError = false;
      this.setCities(cityData);
    });
  }

  ngOnInit(): void {
    this.searchTextChanged.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(searchText => {
      // make the API call now
      this.fetchCities(searchText);
    });
  }

  onKeyUp(cityName: string): void {
    if (this.isError) {
      // no cities were found matchng the expression
      return;
    }
    const onlyCityName = cityName.replace(/,[^,]*$/, '');
    this.selectedCity = onlyCityName;
    this.citySelectionPerformed.emit(onlyCityName);
  }

  setCities(cityData): void {
    this.cities = cityData.map(datum => `${datum.name}, ${datum.country.id}`);
  }

  onCityInput(cityName: string): void {
    this.searchTextChanged.next(cityName.replace(/,[^,]*$/, ''));
  }
}
