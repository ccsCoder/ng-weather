import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { CityNameComponent } from './city-name/city-name.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { TemparatureIndicatorComponent } from './temparature-indicator/temparature-indicator.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    CityNameComponent,
    WeatherIconComponent,
    TemparatureIndicatorComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
