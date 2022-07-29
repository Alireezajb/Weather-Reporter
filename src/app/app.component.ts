import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { weatherDataHumidity } from './models/weather30days.model';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'ahvaz,iran';
  weatherData?: weatherData;
  weatherDataHumidity?: weatherDataHumidity;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    



  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';

  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe
      ({
        next: (response) => {
          this.weatherData = response;
          console.log(response);

        }
      });

    this.weatherService.getWeatherDatahumidity(cityName).subscribe({
      next: (response) => {
        this.weatherDataHumidity = response;
        console.log(response);

      }
    })
  }


}
