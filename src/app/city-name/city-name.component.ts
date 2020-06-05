import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-name',
  templateUrl: './city-name.component.html',
  styleUrls: ['./city-name.component.sass']
})
export class CityNameComponent implements OnInit {
  cityName: string;

  constructor() {
    this.cityName = 'Bengaluru';
  }

  ngOnInit(): void {
  }

}
