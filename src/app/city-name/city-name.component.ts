import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.sass']
})
export class CityNameComponent {
  @Input() cityName: string;
  constructor() {}
}
