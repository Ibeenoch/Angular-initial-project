import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  // templateUrl: './housing-location.component.html',
  template: `
  <section class="listing">
    <img [src]="housingLocation.photo" alt="{{housingLocation.name}}" class="listing-photo">
    <!-- <img src="/assets/images/applewatch1.png" alt="{{housingLocation.name}}" class="listing-photo"> -->
    <h2 class="listing-heading">{{housingLocation.name}} </h2>
    <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}} </p>
  <a [routerLink]="['/details', housingLocation.id]">Read more</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation! : HousingLocation

  constructor(){
    console.log( 'located ',this.housingLocation)
  }
}
