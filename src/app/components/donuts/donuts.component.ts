import { Component } from '@angular/core';
import { DonutModel, Result } from '../../models/donut-model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  donutResult:Result = {} as;
  constructor(private donutService:DonutService){}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.donutService.getDonut().subscribe((response:Result) => {
      console.log(response);
      this.donutResult = response;
    });
  }
}
