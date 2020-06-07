import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temparature-indicator',
  templateUrl: './temparature-indicator.component.html',
  styleUrls: ['./temparature-indicator.component.sass']
})
export class TemparatureIndicatorComponent implements OnInit {
  // Passed on from the parent
  @Input() temp: number;
  @Input() max: number;
  @Input() min: number;
  @Input() feelsLike: number;

  constructor() { }

  ngOnInit(): void {
  }

}
