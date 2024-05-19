import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../../services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
   <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" formControlName="firstName">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" formControlName="lastName">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      <button type="submit" class="primary">Apply Now</button>

    </form>
  </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  
  constructor(){
    this.housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    console.log('params id ', this.housingLocationId)
    // this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId)
    this.housingService.getHousingLocationById(this.housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
      console.log('house details ', this.housingLocation)
    })
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  }
