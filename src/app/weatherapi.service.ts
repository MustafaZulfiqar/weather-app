import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http: HttpClient) { }

  getNews(city)
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3c3fc1f7d86ee70cb041b0153b03b4e3')
  }
}
