import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divisions } from '../model/divisions.model';

const baseUrl = 'https://spa-api.aqiladigital.com/api/divisions'
const baseUr2 = 'https://spa-api.aqiladigital.com/api/divisions'
const baseUr3 = 'https://spa-api.aqiladigital.com/api/divisions'
const baseUr4 = 'https://spa-api.aqiladigital.com/api/divisions/:id'
const baseUr5 = 'https://spa-api.aqiladigital.com/api/divisions/:id'

@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  constructor(private http:HttpClient) { }

  getAlt():Observable<Divisions[]>{
    return this.http.get<Divisions[]>(baseUrl);
  }
}
