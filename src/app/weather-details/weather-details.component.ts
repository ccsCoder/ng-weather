import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.sass']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() feelsLike: number;
  @Input() windSpeed: number;

  constructor() { }

  ngOnInit(): void {
  }

}
