import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temparature-indicator',
  templateUrl: './temparature-indicator.component.html',
  styleUrls: ['./temparature-indicator.component.sass']
})
export class TemparatureIndicatorComponent implements OnInit {
  // Passed on from the parent
  @Input() temp: number;

  constructor() { }

  ngOnInit(): void {
  }

}
