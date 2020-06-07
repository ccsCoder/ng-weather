import { TestBed } from '@angular/core/testing';

import { WeatherIconProviderService } from './weather-icon-provider.service';

describe('WeatherIconProviderService', () => {
  let service: WeatherIconProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherIconProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
