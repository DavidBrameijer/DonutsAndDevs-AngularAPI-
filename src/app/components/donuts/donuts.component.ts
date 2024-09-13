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
  donutResult:DonutModel = {} as DonutModel;
  constructor(private donutService:DonutService){}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.donutService.getDonut().subscribe((response:DonutModel) => {
      console.log(response);
      this.donutResult = response;
    });
  }
}
