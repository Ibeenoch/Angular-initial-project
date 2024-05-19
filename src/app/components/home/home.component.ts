import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housing-location';
import { NgFor } from '@angular/common';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor],
  // templateUrl: './home.component.html',
  template: `
  <section>
    <form >
      <label class="search" for="search">Search</label>
      <input type="text" class="search-input" name="search" id="search" placeholder="Search For Cities" #filter>
      <button class="btn-search" type="button" (click)="filterResults(filter.value)" >Search</button>
    </form>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
housingService = inject(HousingService);

housingLocationList : HousingLocation[] = [];

filterLocationList : HousingLocation[] = [];

constructor(){
  // this.housingLocationList = this.housingService.getAllHousingLocations();
  this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    console.log('data retrived  ', housingLocationList)
    this.housingLocationList = housingLocationList
  })
  this.filterLocationList = this.housingLocationList;
}

filterResults(text: string){
 if(!text){
  this.filterLocationList = this.housingLocationList;
  return;
 }

 this.filterLocationList = this.housingLocationList.filter(houseLocation => houseLocation?.city.toLowerCase().includes(text.toLowerCase()))
}
}
