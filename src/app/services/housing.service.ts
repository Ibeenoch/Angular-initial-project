import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housing-location';
import { HousingLocationComponent } from '../components/housing-location/housing-location.component';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'http://localhost:5000/locations';

  constructor() { }

 async getAllHousingLocations(): Promise<HousingLocation[]> {

    const res = await fetch(this.baseUrl);
    const data = await res.json()
    console.log(data)
    return  data ?? []
  }

 async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
      const res = await fetch(`${this.baseUrl}/${id}`);
      const data = await res.json()
      console.log(data)
      return  data ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`House application received for ${firstName} ${lastName}, with email address od ${email}`)
  }
}
