import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HallofFameModel } from '../models/hallof-fame';

@Injectable({
  providedIn: 'root'
})
export class HallofFameService {

  constructor(private http:HttpClient) { }

  getHallofFame():Observable<HallofFameModel>{
    return this.http.get<HallofFameModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json")
  }
}
