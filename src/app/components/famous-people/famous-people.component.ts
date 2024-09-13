import { Component } from '@angular/core';
import { HallofFameModel } from '../../models/hallof-fame';
import { HallofFameService } from '../../services/hallof-fame.service';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {
  famousResult:HallofFameModel = {} as HallofFameModel;
  constructor(private fameService:HallofFameService){}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.fameService.getHallofFame().subscribe((response:HallofFameModel) => {
      console.log(response);
      this.famousResult = response;
    });
  }
}
