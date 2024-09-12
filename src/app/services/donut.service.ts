import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutModel, Result } from '../models/donut-model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }

  getDonut():Observable<Result>{
    return this.http.get<Result>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }
}
