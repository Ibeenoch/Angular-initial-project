import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
  <div class="w-full mx-auto pt-8">
    <div class="text-center">
      <h1 class="sm:text-3xl text-xl font-semibold">Simple, transparent pricing</h1>
      <p class="text-xs text-gray-500">we believe untitled should be accessible to all companies, no matter the size</p>
    </div>
 <!-- 1st div  -->
    <div class="grid grid-col-1 sm:grid-col-1 lg:grid-cols-8 gap-2 md:gap-8 mt-14 p-4">
      
      <div class="sm:col-start-1 md:col-start-3 sm:col-span-2 rounded-xl bg-[#ffe89d] px-4 py-6">
        <h4 class="font-medium text-sm text-gray-800 text-center pt-2">Early-Bird Pricing:</h4>
        <div class="p-2 mt-4 flex items-center text-xs bg-[#ffdd6c] rounded-xl mx-auto">
          <img class="w-4 h-4 rounded-full" src="/assets/images/clock-rotate-left-icon.png" alt="">
         <p class="ml-2">This price is for the next 10 customers only</p> 
        </div>
        <div class="m-4 flex space-x-4 justify-center items-center">
          <h4 class="text-xs text-gray-500 line-through">$497/mo</h4>
          <h2 class="text-black font-semibold text-xl">$197/mo</h2>
        </div>

        <ul>
          <li>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">Up to 5,000 API requests per month</p>
            </div>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">includes all job data points</p>
            </div>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">Standard API documentation and <br> limited support</p>
            </div>
          </li>
        </ul>

        <button (click)="openModal()" class="w-full px-4 py-2 text-white font-semibold rounded-xl border border-0 bg-orange-500 mt-5 transition-transform duration-500 transform hover:scale-110">Contact Us</button>
      </div>

      <!-- 2nd div  -->

      <div class="sm:col-start-5 sm:col-span-2 rounded-xl bg-[#ffe89d] p-4">
        <h4 class="font-medium text-sm text-gray-800 text-center pt-2">Enterprise:</h4>
        <div class="p-2 mt-4 flex items-center text-xs bg-[#ffdd6c] rounded-xl mx-auto">
          <img class="w-4 h-4 rounded-full" src="/assets/images/clock-rotate-left-icon.png" alt="">
         <p class="ml-2">This price is for the next 10 customers only</p> 
        </div>
        <div class="m-4 flex space-x-4 justify-center items-center">
          <h4 class="text-xs text-gray-500 line-through">$997/mo</h4>
          <h2 class="text-black font-semibold text-xl">$497/mo</h2>
        </div>

        <ul>
          <li>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">Unlimitied API requests</p>
            </div>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">Includes all job data points</p>
            </div>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">Standard API documentation and full <br> white glove support</p>
            </div>
            <div class="flex items-center">
              <img class="w-3 h-3 rounded-full" src="assets/images/check-icon.jpg" alt="">
              <p class="pl-2">Custom implementations</p>
            </div>
          </li>
        </ul>

        <button (click)="openModal()" class="w-full px-4 py-2 text-white font-semibold rounded-xl border border-0 bg-orange-500 mt-5 transition-transform duration-500 hover:scale-110">Contact Us</button>
      </div>
      

    
    </div>
  </div>

  <!-- modal background  -->
  <div [ngClass]="{'hidden': !isModalVisible}" class="bg-gray-700 fixed top-0 left-0 w-full h-full px-5 py-24 md:py-20 md:px-5 lg:px-[350px] bg-opacity-50 flex items-center justify-center">
    <!-- modal content  -->
    <div class="bg-white pb-6 pl-6 pr-6 pt-2 rounded-xl w-full h-auto">
      <div class="flex justify-between mt-2">
        <div></div>
        <button  (click)="closeModal()" >
        <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 492 492" xml:space="preserve">
<g>
	<g>
		<path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
	</g>
</g>
        </svg>
      </button>
      </div>
      <div class="mx-auto">
        <div class="text-center">
        <h2 class="text-black text-lg font-semibold sm:text-xl md:text-2xl">Contact Us</h2>
        <p class="text-gray-500 text-xs pb-5">We'd love to make a part of ours. Please fill out this form.</p>
      </div>

      <form class="grid grid-col-1 pt-15 sm:grid-cols-8 gap-4">
        <div class="sm:col-start-2 grid-col-4 sm:col-span-3">
          <label for="first-name">First Name</label>
          <input class="rounded-xl border border-gray-400 w-full" type="text" name="firstName" id="" placeholder="First Name">
        </div>
        <div class="grid-col-3 sm:col-span-3">
          <label for="last-name">Last Name</label>
          <input class="rounded-xl border border-gray-400 w-full" type="text" name="lastName" id="" placeholder="Last Name">
        </div>
        <div class="sm:col-start-2 sm:col-span-6">
          <label for="email">Email</label>
          <input class="rounded-xl w-full border border-gray-400" type="email" name="email" id="" placeholder="you@company.com">
        </div>
        <div class="sm:col-start-2 sm:col-span-6">
          <label for="phone-number">Phone Number</label>
          <div class="relative flex items-center cursor-pointer">
            <span class="absolute px-2 flex justify-center items-center text-gray-500">
              <p>US </p>
            <svg class="ml-1" fill="#000000" height="7px" width="7px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 330 330" xml:space="preserve">
          <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
          </svg>
            </span>
            <input class="rounded-xl w-full border border-gray-400 pt-2 pb-2 pr-2 pl-14" type="phone" name="phone" id="" placeholder="+1 (555) 000-0000">
          </div>
        </div>

        <div class="sm:col-start-2 sm:col-span-6">
        <div class="flex w-full">
          <input type="checkbox" name="agree" id="">
          <p class="ml-4 text-sm text-gray-500">You agree to our friendly <a href="#">privacy policy.</a></p>
        </div>
        </div>
        
        <div class="sm:col-start-2 sm:col-span-6">
          <button class="w-full bg-orange-500 rounded-xl px-4 py-2 text-white font-bold transition-transform duration-500 hover:scale-110" type="submit">Send Message</button>
        </div>
          
      </form>
      
      </div>
    </div>
  </div>

  <div class="w-full flex justify-between p-4">
    <a [routerLink]="['/signup']"><button class="px-4 py-2 rounded-xl bg-orange-500 text-white font-bold transition-transform duration-400 hover:scale-110">SignUp Page</button></a>
    <a [routerLink]="['/main']"><button class="px-4 py-2 rounded-xl bg-orange-500 text-white font-bold transition-transform duration-400 hover:scale-110">Main Page</button></a>
  </div>
  `,
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  isModalVisible: boolean = false;

  openModal(): void{
    this.isModalVisible = true;
  };

  closeModal(): void{
    this.isModalVisible = false;
  }
}
