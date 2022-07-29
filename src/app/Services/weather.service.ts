import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from '../models/weather.model';
import { weatherDataHumidity } from '../models/weather30days.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http.get<weatherData>(environment.weatherApiBaseUrl,
      {
        headers: new HttpHeaders()
          .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
          .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),

        params: new HttpParams().
          set('location', cityName)
          .set('format', 'json')
          .set('u', 'c')

      });
  }

  getWeatherDatahumidity(cityName: string): Observable<weatherDataHumidity> {
    return this.http.get<weatherDataHumidity>(environment.weatherApiBaseUrlhumidity +`${cityName}`,
      {
        headers: new HttpHeaders()
          .set(environment.XRapidAPIHostHeaderNamehumidity, environment.XRapidAPIHostHeaderValuehumidity)
          .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValuejumidity),
        params: new HttpParams()

          .set('unitGroup', 'metric')



      });

  }

}
