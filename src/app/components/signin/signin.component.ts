import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink],
  template: `
 <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="/assets/mark.svg" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    <h2 class="mt-5 text-gray-800 text-sm sm:text:md md:text:lg lg:text3xl ">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>

<div class="bg-sky-500  p-6">
  <div class="bg-white max-w-sm flex justify-center rounded-xl p-6 space-x-4 mx-auto">
    <div>
      <img class="h-12 w-12" src="/assets/mark.svg" alt="">
    </div>
    <a [routerLink]="['/pricing']">
    <div>
      <h2 class="text-xl text-black"> Pricing</h2>
      <p class="text-slate-500">check out my pricing page</p>
    </div>
  </a>
  </div>
</div>

<div class="bg-gray-900 p-4 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">

  <div class="w-full md:max-w-sm bg-white spacing-y-2 spacing-x-2 mx-auto p-8 rounded-xl sm:flex sm:spacing-y-0 sm:spacing-x-3">
    <img src="/assets/images/images-73.jpeg" class="w-24 h-24 mx-auto sm:mx-2 sm:shrink-0 rounded-full block" alt="">
    <div class="text-center sm:text-left spacing-y-2">
    <div class="spacing-y-2">
      <p class="text-xl text-gray-900 font-semibold">Erin Lindford</p>
      <p class="text-xl text-gray-500">Product Engineer</p>
    </div>
      <button class="text-purple-600 mt-2 text-bold border border-purple-500 rounded-full px-4 py-1 text-sm hover:text-white hover:bg-purple-600 hover:border-transparent focus:ring-2">Message</button>
    </div>
  </div>

  <div class="max-w-sm bg-white mx-auto mt-2 rounded-xl">
    <ul class="p-4 divide-y divide-slate-300">
      <li class="flex p-4">
        <img class="w-14 h-14 rounded-full" src="/assets/images/images-73.jpeg" alt="">
        <div class="pl-4 overflow-hidden">
        <p class="text-black font-medium">Floyd Miles</p>
        <p class="text-gray-600 truncate">floyd.miles&#64;example.comfloyd.miles&#64;example.com</p>
        </div>
      </li>
    
      <li class="flex p-4">
        <img class="w-14 h-14 rounded-full" src="/assets/images/mencover.png" alt="">
        <div class="pl-4 overflow-hidden">
        <p class="text-black font-medium">Dave Stone</p>
        <p class="text-gray-600 truncate">dave.stone&#64;example.com</p>
        </div>
      </li>
    
      <li class="flex p-4">
        <img class="w-14 h-14 rounded-full" src="/assets/images/images-74.jpeg" alt="">
        <div class="pl-4 overflow-hidden">
        <p class="text-black font-medium">Sarah Tina</p>
        <p class="text-gray-600 truncate">sarah.tine&#64;example.com</p>
        </div>
      </li>
    
    </ul>
  </div>

  <div class="mx-auto bg-white w-full sm:max-w-sm sm:w-sm md:w-sm rounded-xl mt-2 p-6">
  <fieldset>
    <legend>Publish status</legend>
    <input type="radio" class="peer/draft" name="status" id="draft" checked>
    <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

    <input type="radio" class="peer/publish ml-4" name="status" id="publish">
    <label for="publish" class="peer-checked/publish:text-sky-500">Publish</label>

    <div class="hidden peer-checked/draft:block"> this is block condition</div>
    <div class="hidden peer-checked/publish:block"> this is publish condition</div>
  </fieldset>
</div>


</div>

<div class="bg-gray-800 p-4 flex gap-2">
  <form class="flex items-center space-x-6 bg-white max-w-sm">
    <div class="shrink-0">
      <img class="w-14 h-14 rounded-full object-cover" src="/assets/images/profile2.jpeg" alt="">
    </div>
    <label class="block">
      <span class="">Choose Photo</span>
      <input type="file" class="block w-full file:bg-violet-100 my-auto file:border-0 file:px-2 file:py-1
      file:font-semibold file:text-purple-500 file:text-sm
      ">
    </label>
  </form>

  <div class="bg-white dark:bg-black max-w-md p-4">
    <div class="flex items-center space-x-4">
      <h2 class="font-semibold text-slate-900">Contributors</h2>
      <span class="rounded-full text-sm font-semi-bold text-black dark:text-white py-1 px-2 bg-slate-300" >204</span>
    </div>
    <div class="flex mt-3 overflow-hidden -space-x-2">
      <img class="w-12 h-12 rounded-full ring-2 ring-white" src="/assets/images/profile2.jpeg" alt="">
      <img class="w-12 h-12 rounded-full ring-2 ring-white" src="/assets/images/profile 3.jpeg" alt="">
      <img class="w-12 h-12 rounded-full ring-2 ring-white" src="/assets/images/profilepics.jpeg" alt="">
      <img class="w-12 h-12 rounded-full ring-2 ring-white" src="/assets/images/images-73.jpeg" alt="">
      <img class="w-12 h-12 rounded-full ring-2 ring-white" src="/assets/images/images-74.jpeg" alt="">
    </div>
    <div class="mt-3">
      <a href="#" class="text-blue-500 font-semibold">+198 others</a>
    </div>
  </div>

  <p class="font-bold text-sm sm:text-md md:text-lg lg:text-3xl text-white">word of the wise</p>
</div>

  <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 bg-blue-800 gap-2">
    <div class="bg-white sm:col-span-1 h-full w-full rounded-xl p-6">
      <p>we are the first div</p>
      <p>we are the first div</p>
      <p>we are the first div</p>
    </div>
    <div class="bg-white sm:col-span-1 h-full w-full rounded-xl p-6">
      <p>we are the first div</p>
      <p>we are the first div</p>
      <p>we are the first div</p>
    </div>
    <div class="bg-white sm:col-span-1 h-full w-full rounded-xl p-6">
      <p>we are the first div</p>
      <p>we are the first div</p>
      <p>we are the first div</p>
    </div>
       
  </div>
  `,
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
