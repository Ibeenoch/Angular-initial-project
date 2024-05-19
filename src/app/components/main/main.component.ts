import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Chart, registerables } from 'chart.js';
import {
  heroBars3,
  heroXMark,
  heroArrowRight,
  heroExclamationTriangle,
  heroPlus
} from '@ng-icons/heroicons/outline';
Chart.register(...registerables);

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ heroBars3, heroXMark, heroArrowRight, heroPlus, heroExclamationTriangle })],
  template: `
    <div class="flex justify-between items-center p-4 bg-[#fff9ed]">
      <div class="flex items-center">
        <p class="text-[#f3b44b] text-xl font-semibold">Joby</p>
        <p class="text-black text-xl font-semibold">.ai</p>
        <button
          class="text-gray-300 text-sm px-2 py-1 bg-gray-200 rounded-xl mx-2"
        >
          beta
        </button>
      </div>

      <div class="hidden sm:flex sm:items-center">
        <div
          class="sm:text-xs sm:font-semibold sm:mx-2 text-black border-b-2 border-b-[#f3b44b]"
        >
          Job Seekers
        </div>
        <div class="sm:text-xs sm:font-semibold sm:mx-2 text-black">
          Employers
        </div>
        <div class="sm:text-xs sm:font-semibold sm:mx-2 text-black">Data</div>
      </div>

      <div class="hidden sm:flex sm:items-center">
        <button
          class="sm:text-black sm:font-semibold sm:text-xs sm:px-4 sm:py-2 sm:rounded-xl"
        >
          Log In
        </button>
        <button
          class="sm:text-white sm:bg-[#f3b44b] sm:font-semibold sm:text-xs sm:px-4 sm:py-2 sm:rounded-xl"
        >
          Sign Up
        </button>
      </div>

      <div (click)="toggleNav()" class="sm:hidden">
        <ng-icon size="30" name="heroBars3"></ng-icon>
      </div>

      <div
        [ngClass]="{ hidden: !hideBar }"
        class="sm:hidden absolute top-0  right-0 p-5 bg-white"
      >
        <div class="flex justify-between gap-6 px-2">
          <ul class="mr-6 pt-5">
            <li
              class="text-black text-md font-semibold py-1 my-1 cursor-pointer border-b-2 border-b-[#f3b44b]"
            >
              Job Seekers
            </li>
            <li
              class="text-black text-md font-semibold py-1 my-1 cursor-pointer"
            >
              Employers
            </li>
            <li
              class="text-black text-md font-semibold py-1 my-1 cursor-pointer"
            >
              Data
            </li>
            <li
              class="text-black text-md font-semibold py-1 my-1 cursor-pointer"
            >
              Log In
            </li>
            <li
              class="text-black text-md font-semibold py-1 my-1 cursor-pointer"
            >
              Sign Up
            </li>
          </ul>
          <ng-icon size="25" name="heroXMark" (click)="toggleNav()"> </ng-icon>
        </div>
      </div>
    </div>
    <div class="bg-[#fff9ed] pt-10">
      <div class="flex justify-center items-center">
        <div
          class="flex sm:flex-row flex-col items-center border border-gray-300 rounded-lg p-1"
        >
          <div
            class="text-xs flex items-center rounded-lg border border-gray-300 p-1"
          >
            <svg
              width="5mm"
              height="5mm"
              version="1.1"
              viewBox="0 0 210 297"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle
                  cx="105.34"
                  cy="166.61"
                  r="103.39"
                  fill="#f4ebfe"
                  stroke="#f4ebfe"
                  stroke-width=".94528"
                />
                <circle
                  cx="107.53"
                  cy="166.61"
                  r="57.347"
                  fill="#e38a00"
                  stroke="#e38a00"
                  stroke-width="1.1065"
                />
              </g>
            </svg>
            <p>Standout in the market</p>
          </div>
          <div class="flex items-center mx-1">
            <p class="text-xs rounded-lg mx-1">Backfill your job board</p>
            <ng-icon size="12" name="heroArrowRight"></ng-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#fff9ed] sm:max-w-1/2 sm:grid sm:grid-cols-3 gap-2">
      <div class="hidden sm:block">
        <svg
          class="mask-gradient -ml-16 -mt-14"
          width="70mm"
          height="120mm"
          version="1.1"
          viewBox="0 0 210 297"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="marker37"
              overflow="visible"
              markerHeight="1"
              markerUnits="userSpaceOnUse"
              markerWidth="1"
              orient="auto"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 1 1"
            >
              <path
                transform="scale(.5)"
                d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
                fill="context-stroke"
                fill-rule="evenodd"
              />
            </marker>
          </defs>
          <path
            d="m108.01 109.26c0.0802-15.496-0.16096-31.006 0.12171-46.493-0.18471-8.2502 10.492-5.4857 13.455-11.304 4.2631-7.0353-1.0844-15.067-8.9734-15.181h-36.861c-5.7509 1.9882-10.739 7.4878-9.8612 13.836v71.286c-0.26347 6.4312 4.9685 11.832 11.44 10.792 12.285-0.1108 24.591 0.22451 36.862-0.17286 6.9064 0.43483 9.197-7.0027 8.8301-12.626 0.27196-4.1297-1.0788-8.7447 2.152-12.1 2.978-4.2722 8.2064-6.6179 13.342-5.961h32.046v0.38329 0.0337"
            fill="none"
            marker-end="url(#marker37)"
            marker-start="url(#marker37)"
            stroke="#e38a00"
            style="paint-order:normal"
          />
        </svg>
      </div>

      <div class="mx-auto pt-12">
        <div class="text-center">
          <h1
            class="text-[#e38a00] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Ultra Fresh,
            <span
              class="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              >real-time job market data.</span
            >
          </h1>
          <p class="text-gray-500 text-xs sm:text:sm mt-5 px-2">
            Access real-time, high-quality job posting data sourced directly
            from company websites and refreshed daily. Unloack the single best
            source of truth on who is actually hiring now on the internet.
          </p>
          <div class="flex items-center justify-center mt-6">
            <button
              class="text-white px-4 py-2 text-xs sm:text-sm md:text-md font-semibold rounded-xl bg-[#e38a00]"
            >
              <a href="#">Get Access</a>
            </button>
            <button
              class="text-black text-xs sm:text-sm md:text-md font-semibold ml-5"
            >
              <a href="#">Explore Data</a>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden sm:block">
        <svg
          class="sm:ml-[100px] md:ml-[100px] lg:ml-[260px] masker"
          width="40mm"
          height="60mm"
          version="1.1"
          viewBox="0 0 210 297"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="Dot"
              overflow="visible"
              markerHeight="1"
              markerWidth="1"
              orient="auto"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 1 1"
            >
              <path
                transform="scale(.5)"
                d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
                fill="context-stroke"
                fill-rule="evenodd"
              />
            </marker>
          </defs>
          <path
            d="m4.4534 199.67h40.326s9.1485-0.52976 13.711 4.0326c3.9921 3.9921 5.6457 12.904 5.6457 12.904v17.744s0.84706 8.9123 4.8391 12.904c4.5624 4.5624 14.517 4.0326 14.517 4.0326h124.2v-102.43h-83.878s-10.381-0.70308-15.324-5.6457c-4.1822-4.1822-5.6457-12.098-5.6457-12.098v-99.825"
            fill="none"
            marker-end="url(#Dot)"
            marker-start="url(#Dot)"
            stroke="#e38a00"
            stroke-width="1.3822"
          />
        </svg>
      </div>
    </div>

    <div
      class="bg-[#fff9ed] flex flex-col gap-4 justify-around pt-8 sm:mt-0 sm:pt-0 pb-6 sm:flex-row"
    >
      <div class="flex flex-col justify-center items-center">
        <h1
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold"
        >
          1 Milion+
        </h1>
        <p class="text-xs sm:text-sm text-gray-500 pt-2 sm:pt-4">
          Real, live jobs
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold"
        >
          20,000+
        </h1>
        <p class="text-xs sm:text-sm text-gray-500 pt-2 sm:pt-4">
          Companies indexed every 24hrs
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <svg
          class="font-bold text-black"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>infinity</title>
          <rect width="50" height="50" fill="none" />
          <path
            d="M18.6,6.62a5.38,5.38,0,1,1-3.82,9.18L12,13.34,9.17,15.85A5.33,5.33,0,0,1,5.4,17.38,5.38,5.38,0,1,1,9.22,8.2L12,10.66l2.83-2.51A5.33,5.33,0,0,1,18.6,6.62M7.8,14.39,10.5,12,7.84,9.65A3.39,3.39,0,1,0,5.4,15.38a3.36,3.36,0,0,0,2.4-1m8.4-4.78L13.5,12l2.66,2.35A3.39,3.39,0,1,0,18.6,8.62,3.36,3.36,0,0,0,16.2,9.61Z"
          />
        </svg>
        <p class="text-xs sm:text-sm text-gray-500 pt-2 sm:pt-4">
          Job data analytics
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-12">
      <div class="text-left">
        <h1 class="text-xl sm:text-2xl md:3xl text-black font-bold">
          What is job posting data?
        </h1>
        <p class="max-w-xs text-xs">
          <br />We index millions of jobs directly from employer websites
          globally then process and refined it into 25+ actionable data points
          per job. <br />
          <br />
          It's parsed, super fresh, and ready to use. This data is available as
          a flat file or accessible via our easy to use API.
        </p>
        <button
          class="text-white text-xs mt-2 max-w-xs px-4 py-2 rounded-lg font-semibold bg-[#e38a00]"
        >
          See API documentation
        </button>
      </div>

      <div class="p-3 rounded-lg bg-gray-100">
        <div
          class="bg-gray-200 flex justify-center items-center py-1 rounded-lg"
        >
          <h1 class="text-black font-bold text-sm px-14 py-2">Dictionary</h1>
          <h1
            class="text-black bg-white font-bold text-sm rounded-lg px-10 py-2"
          >
            JSON
          </h1>
        </div>
        <div class="bg-gray-800 max-h-[200px] overflow-y-auto">
          <pre>
            <code>
              <span class="text-white text-sm">&#123;</span> 
              <span class="text-sky-700 text-xs">"name"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"John doe",</span> 
              <span class="text-sky-700 text-xs">"version"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"1.0.0",</span> 
              <span class="text-sky-700 text-xs">"description"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"api",</span> 
              <span class="text-sky-700 text-xs">"main"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"index.js",</span> 
              <span class="text-sky-700 text-xs">"type"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"module",</span> 
              <span class="text-sky-700 text-xs">"scripts"<span class="text-red-500 text-xs">:</span></span> <span class="text-white text-sm">&#123;</span> 
              <span class="text-sky-700 text-xs">"start"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"nodemon index.js",</span> 
               <span class="text-white text-sm">&#125;</span> 
              <span class="text-sky-700 text-xs">"keywords"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">[],</span> 
              <span class="text-sky-700 text-xs">"author"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"John doe",</span> 
              <span class="text-sky-700 text-xs">"license"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"ISC",</span> 
              <span class="text-sky-700 text-xs">"dependencies"<span class="text-red-500 text-xs">:</span></span> <span class="text-white text-sm">&#123;</span> 
              <span class="text-sky-700 text-xs">"cors"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"^2.8.5",</span> 
              <span class="text-sky-700 text-xs">"express"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"^4.19.2",</span> 
              <span class="text-sky-700 text-xs">"nodemon"<span class="text-red-500 text-xs">:</span></span>  <span class="text-green-500 text-xs">"^3.1.0",</span> 
               <span class="text-white text-sm">&#125;</span>
              <span class="text-white text-sm">&#125;</span> 
          </code>
          </pre>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center mt-14">
      <h1 class="text-xl text-center sm:text-2xl md:3xl text-black font-bold">
        Newly Added Job Postings
      </h1>
      <p class="text-center text-xs">
        <br />This chart reflects the number of new job postings we discover and
        add to our database monthly. <br />
      </p>
    </div>

    <div class="relative p-4 border border-gray-100 rounded-lg">
      <canvas class="w-auto sm:h-1/2" id="canvas">{{ chart }}</canvas>
    </div>
    <!-- <div class="relative">
      <canvas class="w-[50px] h-[50px]" width="100px" height="100px" id="circle">{{chart}}</canvas>
    </div> -->

    <div class="flex justify-center items-center mt-20 mb-20">
      <button
        class="text-white font-normal rounded-lg bg-[#e38a00] text-[10px] px-3 py-1"
      >
        Explore Our Data
      </button>
    </div>

    <div class="flex justify-center items-center mt-20 mb-15">
      <h1 class="text-xl sm:text-xl md:text-2xl text-black font-bold">
        Professional Network Data Use Cases
      </h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 p-3 mb-8 gap-8">
      <div class="flex gap-2">
        <div class="bg-gray-100 mx-4"> <div class="border border-[#e38a00] h-1/2 border-4"></div></div>
        <!-- <div class="flex flex-col max-h-[120px] overflow-y-auto"> -->
        <div class="flex flex-col">
          <div class="flex items-center my-2 gap-4">
            <div>
              <div class="p-4 border border-gray-100 rounded-lg">
                <svg
                  width="10mm"
                  height="10mm"
                  version="1.1"
                  viewBox="0 0 210 297"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="black">
                    <g stroke-width="15">
                      <path
                        d="m183.72 121.75c-0.59951-14.936 2.6777-30.478-1.6148-44.882-3.4579-11.603-16.041-15.214-26.931-15.661-23.785-0.97739-47.616-0.63427-71.422-0.42061-17.998 0.16152-36.116-1.3688-54.012 0.36787-12.47 1.2101-26.151 9.3756-26.551 22.824-0.78997 26.554 1.3307 53.273-0.70801 79.783-0.95189 12.378 9.4707 20.695 21.439 21.329 13.464 0.71329 26.871-0.775 40.372-0.775h23.134"
                      />
                      <path
                        d="m201.41 169.08c-0.0416 21.997-21.34 36.805-41.648 39.644-22.521 3.1478-49.315-8.19-55.614-31.561-5.3898-19.999 10.732-38.593 29.008-45.037 23.386-8.2458 54.564-0.61318 65.272 23.164 1.9456 4.32 2.9888 9.049 2.9812 13.79z"
                      />
                      <path
                        d="m184.57 198.76c7.7203 6.3024 15.441 12.605 23.161 18.907"
                      />
                    </g>
                    <path
                      d="m46.108 61.816c-1.3943-11.44 0.05767-28.029 12.147-31.894 10.716-3.4262 22.368-1.7938 33.472-1.3122 12.879 0.55862 26.266-1.9135 38.697 1.4485 10.023 2.7107 12.124 13.902 12.124 23.154v8.6921"
                      stroke-width="15"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div>
              <h2 class="text-black font-bold text-sm py-4">Recruting/Sales</h2>
              <p class="text-gray-500 text-xs">
                Our job data is never more than 24 hours old, identify the
                freshest new clients based on industries, regions and 25 other
                searchable data points to get a leg up on your competition.
              </p>
            </div>
          </div>

          <div class="flex items-center my-2 gap-4">
            <div>
              <div class="p-4 border border-gray-100 rounded-lg">
                <svg
                  width="10mm"
                  height="10mm"
                  version="1.1"
                  viewBox="0 0 210 297"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="black">
                    <path
                      d="m3.9236 133.4v-50.663s-1.5991-15.387 4.9982-21.578c6.3617-5.9706 21.992-4.691 21.992-4.691h67.976s14.102-0.83739 19.993 4.691c5.8905 5.5284 4.9982 18.764 4.9982 18.764v181.07h49.982s18.979-0.92518 26.99-8.4438c8.7179-8.182 6.9975-26.269 6.9975-26.269v-82.561s-1.1642-16.104-7.9972-22.517c-7.0686-6.634-21.992-4.691-21.992-4.691h-53.981"
                      stroke-width="15"
                    />
                    <path d="m29.914 89.794h16.994" stroke-width="15" />
                    <path d="m154.87 147.47h20.993" stroke-width="15" />
                    <ellipse
                      cx="55.463"
                      cy="158.3"
                      rx="24.742"
                      ry="23.221"
                      stroke-width="15"
                    />
                    <path
                      d="m3.7382 259.88h102.42s-25.775-66.479-55.201-64.604c-27.841 1.7744-47.22 64.604-47.22 64.604z"
                      stroke-width="15"
                    />
                    <g stroke-width="15">
                      <path d="m70.9 89.794h16.994" />
                      <path d="m29.914 119.6h16.994" />
                      <path d="m70.9 119.6h16.994" />
                      <path d="m154.87 188.76h20.993" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <div>
              <h2 class="text-black font-bold text-sm py-4">Job Boards</h2>
              <p class="text-gray-500 text-xs">
                Our job data is never more than 24 hours old, identify the
                freshest new clients based on industries, regions and 25 other
                searchable data points to get a leg up on your competition.
              </p>
            </div>
          </div>

          <div class="flex items-center my-2 gap-4">
            <div>
              <div class="p-4 border border-gray-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve">

              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 27.965 40.691 c -1.618 0 -3.234 -0.379 -4.756 -1.134 c -0.99 -0.491 -1.394 -1.69 -0.903 -2.68 c 0.491 -0.99 1.689 -1.395 2.68 -0.903 c 1.74 0.863 3.671 0.946 5.439 0.23 c 1.971 -0.796 3.495 -2.466 4.291 -4.7 c 0.371 -1.04 1.513 -1.583 2.555 -1.212 c 1.041 0.371 1.583 1.515 1.212 2.555 c -1.185 3.326 -3.515 5.835 -6.56 7.066 C 30.639 40.433 29.302 40.691 27.965 40.691 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 21.166 28.948 c -0.652 0 -1.292 -0.318 -1.675 -0.905 c -2.546 -3.89 -2.97 -8.148 -1.261 -12.657 c 0.391 -1.033 1.546 -1.554 2.579 -1.162 c 1.033 0.391 1.553 1.546 1.162 2.579 c -1.265 3.337 -0.989 6.213 0.868 9.05 c 0.605 0.924 0.346 2.164 -0.578 2.769 C 21.921 28.842 21.541 28.948 21.166 28.948 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 27.086 28.887 c -0.922 0 -1.751 -0.641 -1.953 -1.579 c -0.233 -1.08 0.454 -2.144 1.533 -2.377 c 3.422 -0.738 7.141 -2.593 5.504 -10.45 c -0.225 -1.081 0.469 -2.141 1.55 -2.366 c 1.08 -0.225 2.141 0.469 2.366 1.55 c 2.195 10.54 -3.452 14.07 -8.577 15.176 C 27.368 28.872 27.226 28.887 27.086 28.887 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 34.069 50.104 c -0.276 0 -0.553 -0.008 -0.831 -0.023 c -1.103 -0.064 -1.945 -1.011 -1.881 -2.113 c 0.063 -1.103 1.021 -1.946 2.112 -1.881 c 2.692 0.155 5.261 -0.734 7.071 -2.442 C 42.15 42.126 43 40.121 43 37.846 c 0 -1.104 0.896 -2 2 -2 c 1.105 0 2 0.896 2 2 c 0 3.355 -1.318 6.448 -3.714 8.708 C 40.87 48.834 37.549 50.104 34.069 50.104 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 24.921 65.499 c -0.193 0 -0.389 -0.028 -0.583 -0.088 c -1.057 -0.322 -1.652 -1.439 -1.33 -2.496 c 1.694 -5.56 0.053 -8.832 -5.319 -10.611 c -1.048 -0.347 -1.617 -1.479 -1.27 -2.527 c 0.347 -1.049 1.477 -1.618 2.527 -1.27 c 7.507 2.485 10.234 7.871 7.888 15.574 C 26.571 64.943 25.778 65.499 24.921 65.499 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 23.703 55.668 c -0.714 0 -1.405 -0.383 -1.766 -1.057 c -1.783 -3.335 -1.876 -6.726 -0.277 -10.078 c 0.476 -0.996 1.668 -1.419 2.667 -0.944 c 0.997 0.476 1.419 1.669 0.944 2.667 c -1.036 2.171 -0.972 4.287 0.194 6.469 c 0.521 0.975 0.153 2.187 -0.821 2.707 C 24.344 55.592 24.021 55.668 23.703 55.668 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 39.537 75.33 c -0.328 0 -0.66 -0.08 -0.966 -0.25 c -6.966 -3.854 -8.794 -9.66 -5.287 -16.787 c 0.487 -0.991 1.686 -1.4 2.677 -0.912 c 0.991 0.488 1.399 1.687 0.912 2.678 c -2.543 5.17 -1.422 8.723 3.635 11.521 c 0.967 0.535 1.316 1.752 0.782 2.719 C 40.923 74.958 40.241 75.33 39.537 75.33 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 33.683 79.286 c -0.396 0 -0.796 -0.117 -1.145 -0.361 c -0.905 -0.634 -1.125 -1.881 -0.492 -2.785 c 1.352 -1.932 1.615 -4.026 0.805 -6.402 c -0.356 -1.046 0.202 -2.182 1.248 -2.538 c 1.044 -0.358 2.182 0.201 2.539 1.247 c 1.233 3.618 0.792 6.979 -1.314 9.986 C 34.935 78.989 34.314 79.286 33.683 79.286 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 16.509 65.353 c -1.642 0 -3.583 -0.563 -5.65 -2.313 c -0.843 -0.714 -0.948 -1.976 -0.234 -2.818 c 0.714 -0.844 1.977 -0.947 2.818 -0.234 c 2.028 1.715 3.439 1.463 4.324 1.122 c 1.031 -0.397 2.188 0.117 2.585 1.147 c 0.396 1.031 -0.118 2.188 -1.148 2.585 C 18.452 65.131 17.54 65.353 16.509 65.353 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 13 40.717 c -0.613 0 -1.219 -0.281 -1.611 -0.813 c -0.655 -0.889 -0.466 -2.141 0.423 -2.797 c 1.313 -0.968 2.663 -1.659 4.013 -2.053 c 1.06 -0.31 2.171 0.3 2.48 1.359 c 0.31 1.061 -0.299 2.171 -1.359 2.48 c -0.898 0.262 -1.826 0.744 -2.76 1.433 C 13.828 40.59 13.413 40.717 13 40.717 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 37.472 55.794 c -0.852 0 -1.641 -0.548 -1.908 -1.403 c -1.147 -3.668 0.239 -7.74 3.225 -9.473 c 0.955 -0.554 2.179 -0.229 2.734 0.726 c 0.554 0.955 0.229 2.18 -0.726 2.733 c -1.341 0.778 -1.989 2.985 -1.416 4.818 c 0.33 1.055 -0.257 2.177 -1.312 2.507 C 37.871 55.764 37.669 55.794 37.472 55.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 34.245 22.77 c -0.346 0 -0.697 -0.09 -1.017 -0.279 c -0.951 -0.563 -1.265 -1.789 -0.703 -2.74 c 0.598 -1.011 2.419 -4.088 5.983 -4.351 c 1.101 -0.068 2.061 0.746 2.142 1.848 s -0.746 2.06 -1.848 2.142 c -0.689 0.051 -1.634 0.37 -2.834 2.399 C 35.594 22.418 34.928 22.77 34.245 22.77 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 80.512 c -1.104 0 -2 -0.896 -2 -2 L 43 9.513 c 0 -1.104 0.896 -2 2 -2 c 1.105 0 2 0.896 2 2 l 0.002 68.999 C 47.001 79.616 46.105 80.512 45 80.512 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 24.572 83.518 c -8.446 0 -15.317 -7.493 -15.317 -16.703 c 0 -1.628 0.215 -3.229 0.64 -4.778 C 7.184 58.94 5.65 54.804 5.65 50.498 c 0 -4.677 1.738 -9.022 4.818 -12.169 c -1.27 -2.478 -1.935 -5.255 -1.935 -8.128 c 0 -6.984 4.077 -13.283 10.026 -15.675 c 2.482 -5.974 7.861 -9.783 13.942 -9.783 c 1.915 0 3.802 0.394 5.611 1.171 c 1.015 0.436 1.484 1.612 1.048 2.627 c -0.436 1.015 -1.614 1.484 -2.627 1.048 c -1.307 -0.562 -2.664 -0.846 -4.032 -0.846 c -4.664 0 -8.792 3.147 -10.518 8.019 l -0.33 0.931 l -0.94 0.304 c -4.816 1.559 -8.181 6.578 -8.181 12.204 c 0 2.686 0.742 5.255 2.145 7.432 l 0.963 1.494 l -1.371 1.132 c -2.894 2.39 -4.622 6.218 -4.622 10.239 c 0 3.672 1.421 7.165 3.898 9.584 l 0.911 0.89 l -0.421 1.202 c -0.52 1.484 -0.784 3.046 -0.784 4.641 c 0 7.005 5.077 12.703 11.317 12.703 c 0.875 0 1.755 -0.116 2.616 -0.346 c 1.066 -0.282 2.163 0.35 2.447 1.418 c 0.284 1.067 -0.351 2.163 -1.418 2.447 C 27.021 83.355 25.794 83.518 24.572 83.518 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 11.513 c -1.104 0 -2 -0.896 -2 -2 C 43 6.473 40.845 4 38.196 4 c -1.959 0 -3.706 1.347 -4.449 3.432 c -0.371 1.04 -1.515 1.583 -2.556 1.211 c -1.04 -0.372 -1.583 -1.516 -1.211 -2.556 C 31.299 2.39 34.524 0 38.196 0 c 4.855 0 8.805 4.268 8.805 9.513 C 47.001 10.617 46.105 11.513 45 11.513 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 36.407 90 c -5.841 0 -10.593 -5.153 -10.593 -11.488 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 c 0 4.129 2.958 7.488 6.593 7.488 S 43 82.641 43 78.512 c 0 -1.104 0.896 -2 2 -2 c 1.105 0 2 0.896 2 2 C 47 84.847 42.248 90 36.407 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 59.08 37.736 c -1.337 0 -2.674 -0.258 -3.959 -0.778 c -3.045 -1.23 -5.375 -3.74 -6.561 -7.066 c -0.371 -1.041 0.172 -2.185 1.212 -2.555 c 1.044 -0.373 2.185 0.171 2.556 1.212 c 0.797 2.234 2.32 3.904 4.291 4.7 c 1.771 0.716 3.701 0.633 5.439 -0.231 c 0.99 -0.49 2.189 -0.086 2.681 0.903 c 0.49 0.99 0.086 2.189 -0.903 2.681 C 62.314 37.357 60.697 37.736 59.08 37.736 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 70.527 25.104 c -0.151 0 -0.304 -0.017 -0.457 -0.053 c -1.075 -0.251 -1.744 -1.327 -1.492 -2.403 c 0.428 -1.832 0.249 -3.744 -0.547 -5.846 c -0.392 -1.033 0.129 -2.188 1.162 -2.579 c 1.034 -0.389 2.188 0.129 2.578 1.163 c 1.071 2.83 1.308 5.579 0.701 8.172 C 72.258 24.481 71.436 25.104 70.527 25.104 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 61.357 30.478 c -0.363 0 -0.731 -0.1 -1.063 -0.307 c -4.438 -2.791 -8.54 -8.039 -2.873 -17.194 c 0.581 -0.939 1.813 -1.23 2.753 -0.648 c 0.939 0.582 1.229 1.814 0.647 2.753 c -4.224 6.824 -1.362 9.838 1.602 11.702 c 0.936 0.588 1.217 1.823 0.629 2.758 C 62.673 30.146 62.022 30.478 61.357 30.478 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 78.447 c -1.104 0 -2 -0.896 -2 -2 c 0 -3.355 1.319 -6.448 3.714 -8.708 c 2.608 -2.461 6.27 -3.74 10.048 -3.527 c 1.103 0.064 1.944 1.011 1.881 2.113 c -0.064 1.103 -0.995 1.943 -2.113 1.881 c -2.673 -0.151 -5.259 0.734 -7.07 2.442 C 47.85 72.167 47 74.172 47 76.447 C 47 77.552 46.104 78.447 45 78.447 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 61.021 71.179 c -0.698 0 -1.377 -0.366 -1.744 -1.018 c -0.542 -0.963 -0.202 -2.183 0.76 -2.725 c 4.932 -2.779 5.912 -6.307 3.182 -11.438 c -0.519 -0.975 -0.149 -2.187 0.826 -2.705 c 0.975 -0.52 2.187 -0.147 2.705 0.826 c 3.783 7.108 2.141 12.918 -4.748 16.801 C 61.691 71.096 61.354 71.179 61.021 71.179 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 67.037 75.106 c -0.612 0 -1.216 -0.279 -1.608 -0.809 c -2.213 -2.981 -2.773 -6.327 -1.665 -9.942 c 0.324 -1.057 1.445 -1.646 2.498 -1.326 c 1.056 0.323 1.65 1.442 1.326 2.498 c -0.725 2.366 -0.38 4.455 1.054 6.388 c 0.658 0.887 0.473 2.14 -0.415 2.798 C 67.869 74.979 67.451 75.106 67.037 75.106 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 51.277 51.893 c -0.478 0 -0.958 -0.171 -1.34 -0.517 c -0.819 -0.74 -0.884 -2.005 -0.143 -2.824 c 5.326 -5.893 11.396 -6.34 17.553 -1.289 c 0.854 0.7 0.979 1.96 0.277 2.814 c -0.698 0.854 -1.96 0.979 -2.814 0.277 c -4.467 -3.663 -8.184 -3.395 -12.049 0.879 C 52.367 51.671 51.823 51.893 51.277 51.893 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 60.367 47.92 c -1.059 0 -1.942 -0.831 -1.995 -1.9 c -0.056 -1.103 0.794 -2.042 1.897 -2.097 c 2.508 -0.125 4.356 -1.144 5.652 -3.114 c 0.606 -0.922 1.85 -1.178 2.77 -0.572 c 0.923 0.607 1.18 1.847 0.572 2.77 c -2.018 3.067 -4.977 4.72 -8.795 4.91 C 60.435 47.919 60.401 47.92 60.367 47.92 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 73.491 65.353 c -1.031 0 -1.943 -0.222 -2.695 -0.512 c -1.03 -0.396 -1.545 -1.554 -1.147 -2.585 c 0.396 -1.03 1.556 -1.542 2.585 -1.147 c 0.882 0.341 2.295 0.595 4.323 -1.122 c 0.844 -0.714 2.105 -0.608 2.818 0.234 c 0.714 0.843 0.608 2.104 -0.234 2.818 C 77.073 64.789 75.132 65.353 73.491 65.353 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 76.999 40.717 c -0.412 0 -0.828 -0.127 -1.186 -0.391 c -0.933 -0.688 -1.86 -1.17 -2.759 -1.432 c -1.061 -0.31 -1.669 -1.42 -1.359 -2.48 c 0.31 -1.06 1.419 -1.669 2.48 -1.359 c 1.352 0.395 2.701 1.085 4.013 2.053 c 0.889 0.656 1.077 1.908 0.422 2.797 C 78.218 40.436 77.612 40.717 76.999 40.717 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 50.209 69.646 c -0.689 0 -1.36 -0.356 -1.731 -0.996 c -0.555 -0.955 -0.23 -2.179 0.726 -2.733 c 1.342 -0.779 1.99 -2.985 1.417 -4.818 c -0.33 -1.055 0.257 -2.177 1.311 -2.506 c 1.056 -0.328 2.177 0.256 2.506 1.311 c 1.148 3.666 -0.238 7.738 -3.226 9.473 C 50.896 69.56 50.55 69.646 50.209 69.646 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 56.721 22.282 c -0.943 0 -1.783 -0.67 -1.964 -1.631 c -0.436 -2.318 -1.215 -2.94 -1.845 -3.224 c -1.008 -0.453 -1.457 -1.637 -1.004 -2.645 c 0.454 -1.008 1.638 -1.457 2.645 -1.003 c 3.259 1.465 3.919 4.979 4.136 6.133 c 0.204 1.085 -0.511 2.131 -1.597 2.335 C 56.967 22.271 56.843 22.282 56.721 22.282 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 80.512 L 45 80.512 c -1.104 0 -2 -0.896 -2 -2 L 43 9.513 c 0 -1.104 0.896 -2 2 -2 l 0 0 c 1.105 0 2 0.896 2 2 l -0.002 68.999 C 46.999 79.616 46.104 80.512 45 80.512 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 65.428 83.518 c -1.222 0 -2.448 -0.162 -3.646 -0.48 c -1.067 -0.284 -1.702 -1.38 -1.418 -2.447 c 0.284 -1.066 1.375 -1.703 2.447 -1.418 c 0.861 0.229 1.742 0.346 2.616 0.346 c 6.24 0 11.317 -5.698 11.317 -12.703 c 0 -1.596 -0.264 -3.157 -0.784 -4.64 l -0.421 -1.202 l 0.911 -0.891 c 2.478 -2.42 3.898 -5.913 3.898 -9.584 c 0 -4.021 -1.728 -7.849 -4.622 -10.239 l -1.371 -1.132 l 0.964 -1.494 c 1.403 -2.175 2.146 -4.745 2.146 -7.431 c 0 -5.626 -3.364 -10.645 -8.181 -12.204 l -0.939 -0.304 l -0.329 -0.931 c -1.727 -4.871 -5.855 -8.019 -10.519 -8.019 c -1.368 0 -2.725 0.285 -4.032 0.846 c -1.013 0.435 -2.192 -0.034 -2.627 -1.048 c -0.436 -1.015 0.033 -2.191 1.049 -2.627 c 1.809 -0.777 3.696 -1.171 5.61 -1.171 c 6.08 0 11.459 3.809 13.942 9.783 c 5.949 2.392 10.025 8.691 10.025 15.675 c 0 2.873 -0.665 5.651 -1.935 8.128 c 3.08 3.147 4.818 7.492 4.818 12.169 c 0 4.306 -1.533 8.441 -4.244 11.537 c 0.425 1.549 0.64 3.15 0.64 4.779 C 80.745 76.024 73.874 83.518 65.428 83.518 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 45 11.513 c -1.104 0 -2 -0.896 -2 -2 C 43 4.268 46.949 0 51.804 0 c 3.672 0 6.897 2.389 8.218 6.087 c 0.371 1.04 -0.171 2.185 -1.211 2.556 c -1.04 0.372 -2.185 -0.169 -2.557 -1.211 C 55.51 5.347 53.763 4 51.804 4 c -2.649 0 -4.805 2.473 -4.805 5.513 C 46.999 10.617 46.104 11.513 45 11.513 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 53.593 90 C 47.752 90 43 84.847 43 78.512 c 0 -1.104 0.896 -2 2 -2 c 1.105 0 2 0.896 2 2 C 47 82.641 49.957 86 53.593 86 s 6.594 -3.359 6.594 -7.488 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 C 64.187 84.847 59.435 90 53.593 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
              </svg>
            </div>
            </div>

            <div>
              <h2 class="text-black font-bold text-sm py-4">Recruting/Sales</h2>
              <p class="text-gray-500 text-xs">
                Our job data is never more than 24 hours old, identify the
                freshest new clients based on industries, regions and 25 other
                searchable data points to get a leg up on your competition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 p-6 w-full h-3/5 overflow-hidden rounded-xl">
        <img class="w-full h-full" src="/assets/images/iccon.png" alt="">
      </div>
    </div>

    <div class="bg-[#f9f9f9] py-16 px-8">
      <h1 class="text-xl sm:text-xl md:text-2xl text-black font-bold">
        Feature HighLights
      </h1>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-3 gap-2">
        
        <div class="">
          <div class="bg-white rounded-xl my-2 border border-gray-100 p-4 w-14">
        <svg width="5mm" height="5mm" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
        <path d="m140.83 175.17s-18.099-0.34444-40.477 1.8046c0 0-38.063 4.7617-55.821 11.005-10.702 3.763-29.795 15.673-29.795 15.673s15.819-32.978 28.873-42.717c29.97-22.359 97.957-28.657 97.957-28.657l-1.4748-17.425s-1.5438-6.2385 1.4748-7.2906c3.2618-1.1369 8.1112 4.6099 8.1112 4.6099l50.511 47.248-52.045 37.221s-2.9119 3.722-5.4173 2.6547c-2.7759-1.1825-1.3588-6.3452-1.3588-6.3452z" fill="none" stroke="#000" stroke-width="12.048"/>
        </svg>
        </div>
        <h1 class="text-black font-semibold text-lg my-4">Direct from Companies</h1>
        <ul class="max-w-xs mb-2">
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Our job data is sourced exclusively from company websites, ensuring the highest level of accurately and reliability</p></li>
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">No reliance on third-party job posting sites like Linkedin or indeed</p></li>
        </ul>
        </div>
        
        <div class="">
          <div class="bg-white flex justify-center items-center rounded-xl my-2 border border-gray-100 px-4 py-2 w-14">
          <svg width="10mm" height="10mm" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clipPath28">
              <path d="m27.091 58.017v139.54h63.336c-0.24113-0.46322-0.43744-0.95313-0.57568-1.4774-0.32946-1.2943-0.54134-2.6114-0.73329-3.9326-0.11029-1.625-0.05222-3.7326 1.835-4.439 0.35129-0.13149 0.72595-0.1576 1.1059-0.1571 0.37993 5.3e-4 0.76526 0.0276 1.1395 2e-3 0.41055 0.23192 0.8515 0.41701 1.232 0.69556 0.90349 0.66148 1.2487 1.8487 1.7787 2.7771 0.52553 1.0762 0.94477 2.1949 1.2971 3.3368 1.7499 0.0215 3.4998 0.0263 5.2498-0.016 0.70837-0.0145 1.4152-0.0495 2.1213-0.0946-2.6494-1.5153-1.7051-5.2671 2.8401-5.18 1.6146 0.0312 3.2298 0.0251 4.8447 0.0243 1.5174-0.0593 3.0481 0.0926 4.561-0.0512 0.84847-0.15573 1.6327-0.40704 2.3466-0.88883 0.66734-0.51052 1.2789-1.0879 1.9301-1.6211 1.0694-0.87567 2.0938-1.2715 2.9709-1.3229 1.1534-1.1231 2.4404-2.1038 3.7388-3.0639 1.1721-0.87554 2.4111-1.6482 3.4938-2.6386 1.0262-1.0218 2.0883-1.9712 3.3052-2.759 1.5436-0.85196 3.1054-1.6498 4.8023-2.1301-0.38822-0.40329-0.77675-0.8062-1.1565-1.218-2.6488-2.8724-1.4635-5.6153 0.77928-5.6834 1.0195-0.0309 2.2575 0.49114 3.453 1.8046 0.29925 0.32875 0.60655 0.64914 0.91158 0.97203-0.0624-0.15371-0.11916-0.30935-0.15762-0.47077-0.40902-1.7168 0.46276-3.5143 1.2971-4.9408 1.1486-1.415 2.5705-2.4386 4.0948-3.4199 1.7507-1.2898 3.4038-2.7322 4.7496-4.4499 1.2695-1.5868 2.56-3.162 4.024-4.5708 0.0676-0.24845 0.12962-0.49868 0.18035-0.75189 0.12487-1.2397 0.29564-2.4776 0.17725-3.7259-0.0659-1.4933-0.16414-2.9856-0.34003-4.4705-0.20553-1.7374-0.44152-3.4715-0.65888-5.2069-0.37952-3.0301 1.1263-4.727 2.6929-4.793 1.2106-0.051 2.4572 0.8717 2.898 2.9058 0.0109-0.59473 0.0413-1.1885 0.0383-1.7834-0.0981-2.5592-0.2425-5.1174-0.53744-7.6626-0.22863-2.0749-0.48996-4.1565-0.49196-6.2466-3e-3 -1.3178 2e-3 -2.6362-0.0243-3.9538-0.0586-2.876 1.4236-4.314 2.9058-4.314 0.76602 0 1.5303 0.38734 2.0836 1.1555v-55.777zm139.54 98.783c-0.26761 1.5216-0.54508 3.0412-0.92087 4.5413-0.70991 2.7262-1.5626 5.4323-2.8717 7.938-1.2459 2.2936-2.5836 4.569-4.886 5.951-1.7048 0.94701-3.526 1.6591-5.5077 1.6697-0.80747-8e-3 -1.6142-0.0316-2.4102-0.10129 0.0781 0.0915 0.16272 0.17685 0.23926 0.26975 3.6536 4.4359-1.0399 8.1895-4.5331 3.6261-0.33225-0.43405-0.69321-0.84203-1.0656-1.2397-5e-3 0.0214-0.0119 0.0427-0.016 0.0641-0.73652 1.6521-2.1494 2.6595-3.6034 3.6349-1.3129 0.77482-2.2203 2.0015-3.2603 3.0872-1.6316 1.6982-3.4633 3.1804-5.2457 4.7124-0.23861 0.19441-0.47764 0.389-0.71624 0.58342-2.4493 1.9957-4.6616 1.4882-5.3888 0.0372-1.4724 1.8715-2.9203 3.7906-5.0679 4.933-0.85138 0.38797-1.7186 0.73535-2.5973 1.0485h47.851zm-17.139 17.092c-0.0637 0.16755 0.0555 0.21092 0.18345 1e-3 -0.0584 3e-3 -0.12288-1e-3 -0.18345-1e-3zm-8.245 6.2885c-0.1703 0.0186-0.33564 0.0564-0.49868 0.10284 0.1951 0.0538 0.37407 0.0419 0.49868-0.10284z" fill="#f00"/>
              </clipPath>
              <clipPath id="clipPath63">
              <path d="m103.5 126.29v13.361c0.24907-1.1606 1.4025-2.0886 3.2158-2.0335 0.5622 0.0171 1.1875 0.12825 1.8686 0.35656 0.0898 0.0301 0.17672 0.068 0.26613 0.0992-1.3e-4 -0.93404 0.32701-1.6621 0.88573-2.1885-2.9379-1.6088-1.9246-5.2964 2.0686-5.1764 0.31709 0.01 0.65304 0.0434 1.0072 0.10387 1.4257 0.24361 2.8198 0.63185 4.1915 1.0852 0.0956 0.027 0.18497 0.0661 0.27905 0.0961-0.84787-1.83 0.35172-3.6646 2.604-3.6112 0.75293 0.0179 1.6232 0.24649 2.574 0.75706 0.0974 0.0523 0.19509 0.1048 0.29249 0.1571 0.33101 0.19656 0.61187 0.34153 0.99529 0.5426 0.76128-1.1868 1.5278-2.3702 2.3012-3.5491zm25.438 0c-1.106 1.6637-2.1952 3.3384-3.2722 5.0209 0.18003 0.19987 0.34623 0.41181 0.48783 0.64338 0.34823 0.4488 0.65576 0.93064 1.0046 1.3756 0.84226 0.91001 1.9001 1.618 2.636 2.6324 0.82241 0.99583 1.6499 2.007 2.2407 3.1626 0.1928 0.37714 0.33783 0.73905 0.44907 1.0873 0.22464 0.0754 0.45027 0.147 0.68265 0.19947 0.6416 0.0851 1.2064 0.4302 1.7994 0.64596 1.1636 0.26692 2.02 1.0099 2.7673 1.8929 0.46273 0.82119 0.61018 1.6134 0.5085 2.3089 0.23286 0.52302 0.3574 1.0951 0.35863 1.6004-0.14875 0.90589-0.3409 1.6793-0.84026 2.4567-0.0158 0.0247 0.0194-0.0554 0.0284-0.0832 0.20849-0.80541-0.24022 0.68992-0.14522 0.77412-0.0296 0.94411-0.0896 1.8911-0.26716 2.8205-0.48462 1.8538-1.4498 3.1296-3.4494 3.423-1.0342 0.0578-2.0608-8e-3 -3.082-0.19688-0.95605-0.19286-1.8865-0.47636-2.774-0.88677-0.55784-0.23116-1.1431-0.28426-1.7337-0.41858-0.94083-0.23478-1.8557-0.54838-2.7828-0.83044-0.80798-0.26729-1.7607-0.73417-2.1461-0.83147-0.93968-0.26473-1.8441-0.63308-2.6448-1.203-0.66705-0.42433-1.3306-0.85172-1.9926-1.2826-0.64239-0.35875-1.3375-0.5887-2.0423-0.78962-1.8551 3.4019-3.6118 6.8546-5.1614 10.401-1.1404 2.6097-3.8643 1.6636-2.7182-0.94361 0.14196-0.32294 0.26427-0.6556 0.42633-0.96894 0.74077-1.4322 3.2834-5.9447 3.8122-6.8988 0.41748-0.75336 0.84155-1.5012 1.2604-2.2531-0.70281-0.18393-1.409-0.35356-2.1254-0.48369-0.9618-0.25871-1.895-0.60314-2.8722-0.81184-1.1761-0.27858-2.3823-0.43561-3.5192-0.86971-0.11443-0.0437-0.22337-0.0901-0.33125-0.13695v60.049h81.801v-7.9447c-0.73832 1.1289-2.5313 1.5296-4.8514 0.13642-1.4075-0.84517-2.8444-1.6618-4.1796-2.6184-1.1645-0.87584-2.2069-1.8907-3.3011-2.8458-0.57573-0.38887-1.0214-0.97875-1.6133-1.34-0.37181-0.24507-0.72188-0.51592-1.1296-0.68627-0.34093-0.11004-0.70583-0.11994-1.0609-0.14624-0.82667-0.0136-1.6124-0.29201-2.4154-0.45217-0.74093-0.0783-1.4428-0.27912-2.1327-0.55811-0.50003-0.15832-0.91575-0.47702-1.3245-0.79013-3.3495-2.5655 2.8485-2.2275 4.4519-3.0029-0.39217-0.10634-0.77818-0.24265-1.1751-0.32762-0.60337-0.0916-1.1971-0.16674-1.7968-0.29094-0.30157-0.10146-0.59681-0.21877-0.89504-0.32918-4.5543-1.6861-3.8044-5.8526-0.22479-5.8906 0.60472-6e-3 1.2937 0.11257 2.0479 0.37362-1.5017-1.6157-0.52397-4.2031 2.8629-4.4871-1.1725-1.8008-0.0846-3.8936 2.435-3.9445 0.66175-0.0134 1.4215 0.11385 2.264 0.42478 0.51885 0.1915 1.0204 0.42628 1.5513 0.58084 0.80444 0.27492 1.5688 0.64639 2.3761 0.90744 1.2189 0.34425 2.455 0.63909 3.6148 1.1643 1.1511 0.48558 2.2672 1.0631 3.4918 1.3529 0.33349 0.0901 0.6689 0.17315 1.0036 0.2589v-50.149zm-25.438 14.327v0.37982c0.0371 5.3e-4 0.0765 5e-3 0.11421 6e-3 -0.048-0.12852-0.0877-0.25737-0.11421-0.38603zm67.93 41.008c-0.0124-5.3e-4 7e-3 4e-3 0.0811 0.0181 0.0772 0.0145 0.15573 0.0232 0.23358 0.0346-5e-3 -4e-3 -0.0167-0.0116-0.0217-0.0155-0.0623-7e-3 -0.26142-0.0358-0.293-0.0372zm8.7359 3.9052v5.3e-4c0.25026 0.15139 0.49531 0.31107 0.71985 0.50178 0.52641 0.43928 1.1772 0.76259 1.725 1.172 0.65603 0.34297 1.3589 0.58611 2.0913 0.7028 0.20997 0.0334 0.40757 0.076 0.59893 0.12247v-2.4862c-5.3e-4 -1e-5 -1e-3 0-2e-3 0-0.88997-0.0126-1.7801-0.0101-2.6701-0.0103-0.821 8e-4 -1.6419-2.6e-4 -2.4629-3e-3zm1.3178 7.474c0.52561 0.29485 1.0586 0.57933 1.5617 0.8909 1.1316 0.70089 1.8596 1.514 2.2557 2.3136v-2.4887c-0.52091 0.0381-1.0995 8e-3 -1.7384-0.1142-0.71282-0.1369-1.4036-0.34771-2.0789-0.60152z" fill="#f00"/>
              </clipPath>
            </defs>
            <g stroke="#000">
            <circle transform="matrix(1.3135 0 0 1.3135 -34.167 5.1522)" cx="96.861" cy="127.79" r="68.269" clip-path="url(#clipPath28)" fill="none" stroke-width="10"/>
            <g fill="#fff">
            <ellipse transform="matrix(1.3135 0 0 1.3135 -34.167 5.1522)" cx="144.4" cy="166.59" rx="39.401" ry="38.803" clip-path="url(#clipPath63)" stroke-width="10"/>
            <g stroke-width="10">
              <path d="m108.39 199.42 18.394 15.328"/>
              <path d="m207.29 234.31-22.226-13.796"/>
              <path d="m4.1541 171.46s9.2857 8.0378 15.078 9.7574c5.0698 1.5051 17.509-0.0833 17.509-0.0833s12.662 0.60769 16.464 4.8877c4.3239 4.8678-0.09138 17.432 1.0126 23.848 1.1613 6.7502 8.8489 21.783 8.8489 21.783l2.4012 25.645"/>
              <path d="m77.73 85.626s2.0196 15.954 5.7119 22.015c3.5344 5.8018 16.266 8.5378 19.8 14.34 6.3134 10.363 2.9833 25.991 15.108 26.492 9.0275 0.37328 11.41-14.603 16.731-21.905 5.6637-7.7712 20.823-15.649 20.823-15.649"/>
            </g>
            </g>
          </g>
          </svg>
        </div>
        <h1 class="text-black font-semibold text-lg my-4">Ultra Fresh</h1>
        <ul class="max-w-xs mb-2">
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">We crawl thousands of company websites daily for the most current and comprehensive job market data.</p></li>
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Our data is not transformed or touched by third-party brokers, maintaining its integrity and authenticity</p></li>
        </ul>
        </div>
        
        <div class="">
          <div class="bg-white rounded-xl  flex justify-center items-center  my-2 border border-gray-100 px-4 py-2 w-14">
          <svg width="10mm" height="10mm" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clipPath106">
            <path d="m99.94 197.41v53.883h29.593c-7.9e-4 -0.27373-7.9e-4 -0.54746-3e-3 -0.82114-5e-3 -0.676-0.0115-1.352-0.0315-2.0278-0.0266-0.84557-0.0588-1.6922-0.15503-2.5332-0.13394-1.1324-0.34497-2.2508-0.59635-3.3631-0.20809-1.0917-0.32847-2.2078-0.71055-3.2582-1.1724-3.2231 0.28729-5.1775 2.0893-5.1005 0.21533 9e-3 0.43612 0.0586 0.65732 0.12713-0.37181-1.3475-0.72263-2.7042-0.663-4.1181 0.12169-2.8856 1.65-4.3281 3.113-4.3279 1.463 2e-4 2.8611 1.4431 2.7223 4.3279-0.0531 1.1038 0.33452 2.1398 0.6227 3.1874 0.2168 0.78713 0.54242 1.5331 0.86093 2.2836 0.54829-0.73318 1.282-1.1018 2.0169-1.1018 1.4587 0 2.9176 1.4444 2.9176 4.3326v7.9623c0 2e-3 1e-5 5e-3 0 7e-3 0.11556 0.2435 0.17572 0.58569 0.24235 0.83612 0.18252 0.71876 0.24537 1.4587 0.28526 2.1968 0.0199 0.46335 0.0292 0.92694 0.0362 1.3906h25.502v-53.883h-26.647c-3e-3 0.61884-0.0164 1.2374-0.0713 1.8552-0.12249 0.8015-0.28625 1.5958-0.38085 2.4014-0.0644 0.55107-0.0882 1.1056-0.10542 1.6598-0.0172 0.67819-0.0202 1.3566-0.0233 2.035 0.0503 0.89526-0.0677 1.7622-0.33589 2.6169-0.11016 0.2958-0.14854 0.60894-0.17622 0.92139-0.0416 0.48017-0.0515 0.96269-0.0605 1.4444-9e-3 0.56368-0.0114 1.1271-0.0134 1.6908-5e-3 0.065-1e-3 0.66052 5.3e-4 1.0542 0.0884 0.21164 0.50578 1.8197 0.21239 0.74104-0.0167-0.04-0.0334-0.0799-0.0501-0.11989-0.0556-0.13298-0.10894-0.24581-0.16175-0.35605-2.6e-4 0.0377-2e-3 4e-3 -3e-3 -6e-3 -1.8614-3.8761-2.0618 6.0173-4.1036 4.3475-0.1959 4.2694-3.711 5.0809-5.178 2.4376-1.3357 0.43124-2.8421 0.11381-3.7481-1.1116-0.18737-0.25344-0.31404-0.54592-0.47129-0.81907-0.32641-0.77172-0.4035-1.6062-0.45321-2.4329-0.0319-0.62812-0.0384-1.2569-0.0434-1.8857-4e-3 -0.71286-5e-3 -1.4261-6e-3 -2.1389-0.0545-0.88199 0.0666-1.7357 0.33745-2.5756 0.14727-0.61146 0.38528-1.1836 0.68316-1.7379 0.0337-0.0782 0.085-0.42369 0.18552-0.83199 0.17741-0.56426 0.31992-1.1385 0.40152-1.7244 0.0702-0.50791 0.0934-1.0208 0.11111-1.5327 5e-3 -0.15412 4e-3 -0.30835 7e-3 -0.46251-0.0408-0.40605-0.0713-0.81259-0.10284-1.2232-0.0901-0.7413-0.2427-1.4735-0.45578-2.1895-0.19541-0.68557-0.39084-1.3708-0.58239-2.0572z" fill="#f00"/>
            </clipPath>
          </defs>
          <g fill="none" stroke="#000">
            <g transform="matrix(1.0755 0 0 1.0583 -.18285 -1.6202)" stroke-width="10">
            <path d="m183.72 121.75c-0.59951-14.936 2.6777-30.478-1.6148-44.882-3.4579-11.603-16.041-15.214-26.931-15.661-23.785-0.97739-47.616-0.63427-71.422-0.42061-17.998 0.16152-36.116-1.3688-54.012 0.36787-12.47 1.2101-26.151 9.3756-26.551 22.824-0.78997 26.554 1.3307 53.273-0.70801 79.783-0.95189 12.378 9.4707 20.695 21.439 21.329 13.464 0.71329 26.871-0.775 40.372-0.775h23.134" stroke-width="10"/>
            <path d="m46.108 61.816c-1.3943-11.44 0.05767-28.029 12.147-31.894 10.716-3.4262 22.368-1.7938 33.472-1.3122 12.879 0.55862 26.266-1.9135 38.697 1.4485 10.023 2.7107 12.124 13.902 12.124 23.154v8.6921"/>
            </g>
            <rect transform="matrix(1.5034 0 0 1.3691 -43.225 -135.58)" x="104.94" y="202.41" width="58.5" height="43.883" rx="21.942" ry="21.942" clip-path="url(#clipPath106)" stroke-width="10"/>
            <path d="m131.32 171.59h54.387" stroke-width="14.347"/>
          </g>
          </svg>
        </div>
        <h1 class="text-black font-semibold text-lg my-4">Direct Apply Links</h1>
        <ul class="max-w-xs mb-2">
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Each job listing has a direct apply link to the companyt's ATS or website.</p></li>
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">No redirects to other job platforms, ensuring a seamless and efficient application process.</p></li>
        </ul>
        </div>
        
        <div class="">
          <div class="bg-white flex justify-center items-center px-4 py-2 rounded-xl my-2 border border-gray-100 w-14">
          <svg
                  width="10mm"
                  height="10mm"
                  version="1.1"
                  viewBox="0 0 210 297"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="black">
                    <path
                      d="m3.9236 133.4v-50.663s-1.5991-15.387 4.9982-21.578c6.3617-5.9706 21.992-4.691 21.992-4.691h67.976s14.102-0.83739 19.993 4.691c5.8905 5.5284 4.9982 18.764 4.9982 18.764v181.07h49.982s18.979-0.92518 26.99-8.4438c8.7179-8.182 6.9975-26.269 6.9975-26.269v-82.561s-1.1642-16.104-7.9972-22.517c-7.0686-6.634-21.992-4.691-21.992-4.691h-53.981"
                      stroke-width="15"
                    />
                    <path d="m29.914 89.794h16.994" stroke-width="15" />
                    <path d="m154.87 147.47h20.993" stroke-width="15" />
                    <ellipse
                      cx="55.463"
                      cy="158.3"
                      rx="24.742"
                      ry="23.221"
                      stroke-width="15"
                    />
                    <path
                      d="m3.7382 259.88h102.42s-25.775-66.479-55.201-64.604c-27.841 1.7744-47.22 64.604-47.22 64.604z"
                      stroke-width="15"
                    />
                    <g stroke-width="15">
                      <path d="m70.9 89.794h16.994" />
                      <path d="m29.914 119.6h16.994" />
                      <path d="m70.9 119.6h16.994" />
                      <path d="m154.87 188.76h20.993" />
                    </g>
                  </g>
                </svg>
        </div>
        <h1 class="text-black font-semibold text-lg my-4">Job & Company Info</h1>
        <ul class="max-w-xs mb-2">
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Job postings include important company details like the hiring company's name, logo, website, size, industry, and more.</p></li>
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">We extract and clean 25+ data points for each job, including experience years, visa status, salary, requirements, and more.</p></li>
        </ul>
        </div>
        
        <div class="">
          <div class="bg-white rounded-xl flex justify-center items-center px-4 py-2  my-2 border border-gray-100 w-14">
          <svg
                  width="10mm"
                  height="10mm"
                  version="1.1"
                  viewBox="0 0 210 297"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" stroke="black">
                    <g stroke-width="15">
                      <path
                        d="m183.72 121.75c-0.59951-14.936 2.6777-30.478-1.6148-44.882-3.4579-11.603-16.041-15.214-26.931-15.661-23.785-0.97739-47.616-0.63427-71.422-0.42061-17.998 0.16152-36.116-1.3688-54.012 0.36787-12.47 1.2101-26.151 9.3756-26.551 22.824-0.78997 26.554 1.3307 53.273-0.70801 79.783-0.95189 12.378 9.4707 20.695 21.439 21.329 13.464 0.71329 26.871-0.775 40.372-0.775h23.134"
                      />
                      <path
                        d="m201.41 169.08c-0.0416 21.997-21.34 36.805-41.648 39.644-22.521 3.1478-49.315-8.19-55.614-31.561-5.3898-19.999 10.732-38.593 29.008-45.037 23.386-8.2458 54.564-0.61318 65.272 23.164 1.9456 4.32 2.9888 9.049 2.9812 13.79z"
                      />
                      <path
                        d="m184.57 198.76c7.7203 6.3024 15.441 12.605 23.161 18.907"
                      />
                    </g>
                    <path
                      d="m46.108 61.816c-1.3943-11.44 0.05767-28.029 12.147-31.894 10.716-3.4262 22.368-1.7938 33.472-1.3122 12.879 0.55862 26.266-1.9135 38.697 1.4485 10.023 2.7107 12.124 13.902 12.124 23.154v8.6921"
                      stroke-width="15"
                    />
                  </g>
                </svg>
        </div>
        <h1 class="text-black font-semibold text-lg my-4">Powerful Search (API)</h1>
        <ul class="max-w-xs mb-2">
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Quickly find relevant job postings using our advanced full-text search capabilities</p></li>
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Narrow down your job feed based on company size, industry, location, and other extended company and job information.</p></li>
        </ul>
        </div>
        
        <div class="">
          <div class="bg-white rounded-xl my-2 border border-gray-100  flex justify-center items-center px-4 py-2 w-14">
          <svg width="8mm" height="8mm" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="clipPath72">
            <path d="m2.6107 52.695c0 57.01-57.01 171.03 0 171.03 66.11 0 198.33 66.11 198.33 0 0-19.83 19.628-56.666 0-59.49-8.2879-1.1924-13.482-8.8708-21.263 2.2567-6.3348 9.0595-18.329 12.615-24.721 21.238-4.597 6.2014-6.8182 14.133-13.422 15.013-4.1028 0.54697-5.755-8.6755-3.5548 0.65061 1.9861 8.4186-4.9656 0.77315-11.321 5.9852-2.3471 1.9249-5.4462 2.0454-8.0967 2.3678 2.5661 3.4313-2.0174 8.0409-4.6674 3.5533-0.0704-0.11908-0.0187-0.0524-0.18914-0.17002-0.14195-0.0778-0.27651-0.14307-0.40876-0.19843-0.061 0.21981-0.12641 0.43368-0.16174 0.68729-2.0352 14.61-18.541-8.1467-11.753-13.807 5.4251-4.5235 1.8728 9.713 9.3421 0.77412 4.3339-5.1865-0.48767-9.3539 7.9251-13.906 4.1734-2.258 7.2035 1.2633 13.491-3.3016 8.3762-6.0811 17.472-10.782 25.017-18.833 4.0012-4.2697 14.942-14.379 12.893-14.838-8.9622-2.007-6.5423-2.5142 2.2267-9.0899 4.6761-3.5065-4.1139-6.014 1.802-9.4986 7.9439-4.6792 17.107 5.9523 25.34 9.5198 3.1846 1.38 1.5208-7.5908 1.5208-10.833 0-26.371 26.371-79.112 0-79.112zm192.16 94.016c5.6568 3.312 1.5444 12.247 4.9542 11.922 2.9149-0.27801 1.7489-12.279-4.9542-11.922zm-9.5824 2.4882c4.0158 2.6393 1.4445 0.26937 0 0zm-73.597 67.012 0.24649 0.41186z" fill="#f00"/>
            </clipPath>
          </defs>
          <g fill="none" stroke="#000" stroke-width="10">
            <path d="m100.92 217.64c-27.173-18.795-56.587-37.012-75.298-64.548-10.537-15.508-21.018-34.552-17.172-53.318 2.9321-14.307 11.783-28.843 24.741-35.033 15.742-7.5203 34.757-3.241 49.829 4.6393 7.8013 4.0789 17.865 23.247 20.936 18.054 9.1721-15.512 24.337-31.094 44.086-29.652 19.568 1.4288 43.318 11.376 46.908 32.032 4.3123 24.817-6.0138 50.537-21.956 68.868-20.427 23.488-46.657 41.325-72.074 58.957z" clip-path="url(#clipPath72)"/>
            <path d="m100.36 176.22s9.6654 0.46327 14.013 19.126c3.364 14.44 1.1578 19.385 1.1578 19.385s17.488-27.85 28.275-40.025c8.8581-9.9982 34.743-27.077 34.743-27.077" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </svg>
        </div>
        <h1 class="text-black font-semibold text-lg my-4">Super Easy</h1>
        <ul class="max-w-xs mb-2">
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Subscribe and be ready to go within minutes and get exactly all the listings you need.</p></li>
          <li class="flex gap-3 my-2"> <div class="w-1 h-1 mt-2 rounded-full bg-black"></div> <p class="text-xs">Narrow down your job feed based on company size, industry, location, and other extended company and job information.</p></li>
        </ul>
        </div>
        
      </div>
    </div>

    <!-- pricing  -->
    
    <div class="flex flex-col justify-center items-center mt-20 mb-15">
      <h1 class="text-xl sm:text-xl md:text-2xl text-black font-bold my-4">
        Simple, transparent pricing
      </h1>
      <p class="text-gray-500 text-xs pb-10">High quality data lead to high quality outcomes.</p>
    </div>

    <div class=" mx-auto max-w-xs sm:max-w-sm rounded-xl bg-[#ffe89d] px-4 py-6">
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
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full" > </div>
              <p class="pl-2"></p>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full" > </div>
              <p class="pl-2"></p>
            </div>
          </li>
        </ul>

        <button class="w-full px-4 py-2 text-white font-semibold rounded-xl border border-0 bg-orange-500 mt-5 transition-transform duration-500 transform hover:scale-110">Contact Us</button>
      </div>

      <div class="flex p-6 gap-3 items-center mt-12 border border-[#e38a00] rounded-xl bg-[#fff9ed]">
      <div class="p-4 bg-white rounded-xl border border-[#e38a00]"> <ng-icon color="orange" size="25" name="heroExclamationTriangle"></ng-icon> </div>
      <p class="p-4 text-xs text-gray-500"><strong class="text-black">We do not offer any refunds</strong> after Subscribing and creating an API key! You can fully test and explore our API in a <br>
         rate-limited fshion before signing up. All our endpoints are public - see our <a  class="text-black" href="#">API docs. FAQs,</a> and <a class="text-black" href="#">DB stats</a> for more. <br>
      Due to our small team size and beta status, we can only provide limited support at this time. 
      </p>
      </div>

      <div class="flex flex-col justify-center items-center mt-20 mb-15">
      <h1 class="text-xl sm:text-xl md:text-2xl text-black font-bold my-4">
        All the A's to your Q's
      </h1>
    </div>

    <div class="p-4 flex mt-4 justify-between items-center max-w-md mx-auto bg-[#f9f9f9] rounded-xl">
      <p class="text-gray-500 text-left">What is Joby.ai</p>
      <ng-icon name="heroPlus"></ng-icon>
    </div>

    <div class="p-4 flex mt-4 justify-between items-center max-w-md mx-auto bg-[#f9f9f9] rounded-xl">
      <p class="text-gray-500 text-left">What kind of market data and inteligence does your site provide?</p>
      <ng-icon name="heroPlus"></ng-icon>
    </div>

    <div class="p-4 flex mt-4 justify-between items-center max-w-md mx-auto bg-[#f9f9f9] rounded-xl">
      <p class="text-gray-500 text-left">Is the market data and inteligence provided on your site reliable?</p>
      <ng-icon name="heroPlus"></ng-icon>
    </div>

    <div class="p-4 flex mt-4 justify-between items-center max-w-md mx-auto bg-[#f9f9f9] rounded-xl">
      <div>
      <p class="text-gray-500 text-ss text-left">Can users customize their market data and inteligence preferences?</p>
      <p  class="text-gray-500 text-xs text-left">Certainly! users typically have the ability to customize their market data and inteligence preferences based on factors such as the specific industries they are interested in, the type
        of data they want to receive (e.g. financial metrics, news updates, consumer trends), and the frequency of updates they prefer (e.g. daily, weekly, monthly). this customization helps users tailor their information intake to align with their strategic goals and decision making processes. </p>
    </div>
      <ng-icon name="heroXMark"></ng-icon>
    </div>

    <div class="p-4 flex mt-4 justify-between items-center max-w-md mx-auto bg-[#f9f9f9] rounded-xl">
      <p class="text-gray-500 text-left">Do you offer real-time updates on market trends and job oppotunities?</p>
      <ng-icon name="heroPlus"></ng-icon>
    </div>

    <div class="flex flex-col justify-center items-center mt-14">
      <h1 class="text-xl text-center sm:text-2xl md:3xl text-black font-bold">
        Stll have questions?
      </h1>
      <p class="text-center text-xs mt-4">
        <br />Book a call with our team to learn how Merchlink can help you change the way you manage your e-commerce biusness--forver.<br />
      </p>

      <button
              class="text-white px-4 py-2 mt-8 text-xs sm:text-xs md:text-sm font-semibold rounded-xl bg-[#e38a00]"
            >
              <a href="#">Book a demo</a>
            </button>
    </div>

    <div class="bg-[#fff9ed] sm:max-w-1/2 sm:grid sm:grid-cols-3 gap-2">
      <div class="hidden sm:block">
        <svg
          class="mask-gradient -ml-16 -mt-14"
          width="70mm"
          height="120mm"
          version="1.1"
          viewBox="0 0 210 297"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="marker37"
              overflow="visible"
              markerHeight="1"
              markerUnits="userSpaceOnUse"
              markerWidth="1"
              orient="auto"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 1 1"
            >
              <path
                transform="scale(.5)"
                d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
                fill="context-stroke"
                fill-rule="evenodd"
              />
            </marker>
          </defs>
          <path
            d="m108.01 109.26c0.0802-15.496-0.16096-31.006 0.12171-46.493-0.18471-8.2502 10.492-5.4857 13.455-11.304 4.2631-7.0353-1.0844-15.067-8.9734-15.181h-36.861c-5.7509 1.9882-10.739 7.4878-9.8612 13.836v71.286c-0.26347 6.4312 4.9685 11.832 11.44 10.792 12.285-0.1108 24.591 0.22451 36.862-0.17286 6.9064 0.43483 9.197-7.0027 8.8301-12.626 0.27196-4.1297-1.0788-8.7447 2.152-12.1 2.978-4.2722 8.2064-6.6179 13.342-5.961h32.046v0.38329 0.0337"
            fill="none"
            marker-end="url(#marker37)"
            marker-start="url(#marker37)"
            stroke="#e38a00"
            style="paint-order:normal"
          />
        </svg>
      </div>

      <div class="mx-auto mt-12 pt-12">
        <div class="text-center">
          <h1
            class="text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Ready to access real-time jobs quicker than others?
            >
          </h1>
        
          <div class="flex items-center justify-center mt-6">
            <button
              class="text-white px-4 py-2 text-xs sm:text-sm md:text-md font-semibold rounded-xl bg-[#e38a00]"
            >
              <a href="#">Download API key</a>
            </button>
            <button
              class="text-black text-xs sm:text-sm md:text-md font-semibold ml-5"
            >
              <a href="#">Try for free</a>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden sm:block">
        <svg
          class="sm:ml-[100px] md:ml-[100px] lg:ml-[260px] masker"
          width="40mm"
          height="60mm"
          version="1.1"
          viewBox="0 0 210 297"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="Dot"
              overflow="visible"
              markerHeight="1"
              markerWidth="1"
              orient="auto"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 1 1"
            >
              <path
                transform="scale(.5)"
                d="m5 0c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.3-5 5-5c2.76 0 5 2.24 5 5z"
                fill="context-stroke"
                fill-rule="evenodd"
              />
            </marker>
          </defs>
          <path
            d="m4.4534 199.67h40.326s9.1485-0.52976 13.711 4.0326c3.9921 3.9921 5.6457 12.904 5.6457 12.904v17.744s0.84706 8.9123 4.8391 12.904c4.5624 4.5624 14.517 4.0326 14.517 4.0326h124.2v-102.43h-83.878s-10.381-0.70308-15.324-5.6457c-4.1822-4.1822-5.6457-12.098-5.6457-12.098v-99.825"
            fill="none"
            marker-end="url(#Dot)"
            marker-start="url(#Dot)"
            stroke="#e38a00"
            stroke-width="1.3822"
          />
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 pt-10 gap-4 px-4">
    <a href="#">
      <div class="flex items-center">
          <p class="text-[#f3b44b] text-xl font-semibold">Joby</p>
          <p class="text-black text-xl font-semibold">.ai</p>
          <button
            class="text-gray-300 text-sm px-2 py-1 bg-gray-200 rounded-xl mx-2"
          >
            beta
          </button>
        </div>
    </a>

      <div>
        <h2 class="text-black text-sm">Search</h2>
        <ul class="text-gray-500">
          <li class="text-gray-500 py-2 text-xs"><a href="#">Jobs by Country</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Jobs by Job Title</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Jobs by experience level</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Jobs by Location Type</a> </li>
        </ul>
      </div>

      <div>
        <h2 class="text-black text-sm">Useful Links</h2>
        <ul class="text-gray-500">
          <li class="text-gray-500 py-2 text-xs"><a href="#">Advice</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Post a Job</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Jobs by experience level </a></li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Create email alert for new jobs.</a> </li>
        </ul>
      </div>

      <div>
        <h2 class="text-black text-sm">For Companies</h2>
        <ul class="text-gray-500">
          <li class="text-gray-500 py-2 text-xs"> <a href="#">Promote a Job</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Data</a> </li>
          <li class="text-gray-500 py-2 text-xs"><a href="#">Blog</a> </li>
        </ul>
      </div>

      <div class="pb-6">
        <h2 class="text-black text-sm py-2">Contact Us</h2>
       <div class="flex gap-4">

        <div class=" bg-[#e38a00] p-2 rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve">

        <defs>
        </defs>
        <g style="stroke: white; stroke-width: 8; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
          <path d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z" style="stroke: white; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z" style="stroke: white; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z" style="stroke: white; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z" style="stroke: white; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z" style="stroke: white; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: white; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
        </g>
        </svg>
        </div>

        <div class=" bg-[#e38a00] p-2 rounded-full cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.06167 7.24464C3.10844 6.22264 3.26846 5.56351 3.48487 5.00402L3.48778 4.99629C3.70223 4.42695 4.03818 3.91119 4.47224 3.48489L4.47833 3.47891L4.48431 3.47282C4.91096 3.0382 5.42691 2.70258 5.99575 2.4887L6.00556 2.48495C6.56378 2.26786 7.22162 2.10843 8.24447 2.06167M3.06167 7.24464C3.0125 8.33659 2.99997 8.67508 2.99997 11.5063C2.99997 14.3381 3.01181 14.6758 3.06164 15.768M3.06167 7.24464L3.06167 7.52008M3.48867 18.0168C3.70255 18.5856 4.03817 19.1015 4.47279 19.5282L4.47887 19.5342L4.48484 19.5402C4.91116 19.9743 5.42694 20.3103 5.99628 20.5247L6.00478 20.5279C6.56351 20.7446 7.22167 20.9041 8.24447 20.9509M3.48867 18.0168L3.48492 18.0069C3.26783 17.4487 3.1084 16.7909 3.06164 15.768M3.48867 18.0168L3.47585 17.9492M3.06164 15.768L3.07839 15.8562M3.06164 15.768L3.06164 15.4919M3.47585 17.9492L3.07839 15.8562M3.47585 17.9492C3.30704 17.5033 3.13322 16.881 3.07839 15.8562M3.47585 17.9492C3.48177 17.9649 3.48768 17.9803 3.49359 17.9955C3.70766 18.5726 4.04685 19.0952 4.48679 19.5256C4.91708 19.9655 5.43944 20.3046 6.01636 20.5187C6.47934 20.699 7.13172 20.8875 8.24431 20.9385C9.3671 20.9896 9.71399 21 12.5062 21C15.2985 21 15.6457 20.9896 16.7685 20.9385C17.8824 20.8874 18.534 20.6979 18.9954 20.519C19.5726 20.305 20.0953 19.9657 20.5257 19.5256C20.9655 19.0953 21.3046 18.573 21.5187 17.9961C21.699 17.5331 21.8875 16.8808 21.9384 15.7682C21.9895 14.6454 22 14.2978 22 11.5063C22 8.71472 21.9895 8.36684 21.9384 7.24405C21.8871 6.12427 21.6959 5.47168 21.5161 5.00992C21.2811 4.40322 20.9831 3.94437 20.525 3.48627C20.0678 3.02999 19.6102 2.73179 19.003 2.49654C18.5396 2.31537 17.8866 2.12531 16.7685 2.07406C16.6712 2.06964 16.5798 2.06552 16.4921 2.06168M3.07839 15.8562C3.07684 15.8273 3.07539 15.7981 3.07403 15.7685C3.06961 15.6712 3.06548 15.5797 3.06164 15.4919M8.24447 2.06167C9.33668 2.01184 9.67505 2 12.5062 2C15.3374 2 15.6756 2.01252 16.7675 2.06168M8.24447 2.06167L8.52062 2.06167M16.7675 2.06168L16.4921 2.06168M16.7675 2.06168C17.7897 2.10844 18.4489 2.26844 19.0085 2.48487L19.0162 2.48781C19.5855 2.70226 20.1013 3.03821 20.5276 3.47227L20.5335 3.4783L20.5396 3.48422C20.9737 3.91055 21.3096 4.42646 21.5239 4.99596L21.5275 5.00559C21.7446 5.56381 21.9041 6.22165 21.9508 7.2445M8.52062 2.06167L16.4921 2.06168M8.52062 2.06167C9.44548 2.02123 9.95666 2.01253 12.5062 2.01253C15.056 2.01253 15.5671 2.02124 16.4921 2.06168M8.52062 2.06167C8.43284 2.06551 8.34134 2.06964 8.24402 2.07406C7.13004 2.12512 6.47843 2.31464 6.01708 2.49358C5.43767 2.70837 4.91328 3.04936 4.48192 3.49186C4.0281 3.94756 3.73105 4.40422 3.49655 5.0094C3.31536 5.4728 3.12527 6.12614 3.07402 7.24434C3.06961 7.34135 3.06549 7.43257 3.06167 7.52008M21.9508 15.768C21.9041 16.7908 21.7446 17.449 21.5279 18.0077L21.5247 18.0162C21.3102 18.5856 20.9743 19.1013 20.5402 19.5276L20.5341 19.5336L20.5282 19.5397C20.1015 19.9743 19.5856 20.3099 19.0167 20.5238L19.0069 20.5276C18.4487 20.7447 17.7908 20.9041 16.768 20.9509M3.06164 15.4919C3.0212 14.567 3.0125 14.0558 3.0125 11.5063C3.0125 8.95591 3.0212 8.44544 3.06167 7.52008M3.06164 15.4919L3.06167 7.52008M10.8155 15.5881C11.3515 15.8101 11.926 15.9244 12.5062 15.9244C13.678 15.9244 14.8018 15.4589 15.6304 14.6304C16.4589 13.8018 16.9244 12.678 16.9244 11.5063C16.9244 10.3345 16.4589 9.21072 15.6304 8.38215C14.8018 7.55359 13.678 7.0881 12.5062 7.0881C11.926 7.0881 11.3515 7.20238 10.8155 7.42442C10.2794 7.64645 9.79239 7.97189 9.38213 8.38215C8.97187 8.79242 8.64643 9.27947 8.42439 9.81551C8.20236 10.3515 8.08808 10.9261 8.08808 11.5063C8.08808 12.0865 8.20236 12.661 8.42439 13.197C8.64643 13.7331 8.97187 14.2201 9.38213 14.6304C9.79239 15.0406 10.2794 15.3661 10.8155 15.5881ZM9.37229 8.37231C10.2035 7.54113 11.3308 7.07418 12.5062 7.07418C13.6817 7.07418 14.809 7.54113 15.6402 8.37231C16.4714 9.20349 16.9383 10.3308 16.9383 11.5063C16.9383 12.6817 16.4714 13.809 15.6402 14.6402C14.809 15.4714 13.6817 15.9383 12.5062 15.9383C11.3308 15.9383 10.2035 15.4714 9.37229 14.6402C8.54111 13.809 8.07416 12.6817 8.07416 11.5063C8.07416 10.3308 8.54111 9.20349 9.37229 8.37231ZM19.434 6.04229C19.434 6.37873 19.3003 6.70139 19.0625 6.93929C18.8246 7.17719 18.5019 7.31084 18.1655 7.31084C17.829 7.31084 17.5064 7.17719 17.2685 6.93929C17.0306 6.70139 16.8969 6.37873 16.8969 6.04229C16.8969 5.70585 17.0306 5.38319 17.2685 5.1453C17.5064 4.9074 17.829 4.77375 18.1655 4.77375C18.5019 4.77375 18.8246 4.9074 19.0625 5.1453C19.3003 5.38319 19.434 5.70585 19.434 6.04229Z" stroke="white" stroke-linejoin="round"/>
        </svg>
      </div>

        <div class=" bg-[#e38a00] p-2 rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="#fff" d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z"/></svg>
        </div>

        <div class=" bg-[#e38a00] p-2 rounded-full cursor-pointer">
        <svg fill="#000000" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 310 310" xml:space="preserve">
          <g id="XMLID_826_" style="stroke: white; stroke-width: 8;">
            <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
              c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
              c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
              C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
              c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
              c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
              c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
              c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
              c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
              c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
              c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
              C307.394,57.037,305.009,56.486,302.973,57.388z" style="stroke: white; fill: white;"/>
          </g>
          </svg>
      </div>
       </div>
      </div>


    </div>


  `,
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  hideBar: boolean = false;
  chart: any = [];
  pie: any = [];

  toggleNav() {
    this.hideBar = !this.hideBar;
  }

  totalUsers: any;

  // createTotalUsersChart(): any {
  //   return {
  //     type: 'line',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //       datasets: [
  //         {
  //           labels: 'Total Users',
  //           data: [12, 24, 41, 19, 17, 33, 28, 39, 15, 9, 21, 30],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         }
  //       }
  //     }
  //   }
  // }

  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [
          'United States',
          'China',
          'India',
          'Russia',
          'Japan',
          'Germany',
          'Italy',
          'United Kingdom',
          'France',
          'Denmark',
        ],
        datasets: [
          {
            label: 'cities',
            data: [
              5.0, 1.5, 2.4, 3.3, 2.3, 3.9, 3.5, 1.4, 4.1, 2.5, 4.1, 3.2, 2.0,
            ],
            backgroundColor: [
              '#4e57f0',
              '#dd1949',
              '#a9bbfd',
              '#f49d4d',
              '#99a2b3',
              '#f8ca7d',
              '#f9e9ae',
              '#302fcb',
              '#bb3131',
              '#159c7c',
              '#0d8468',
              '#591898',
              '#b8b7b3',
            ],
            borderRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            borderColor: [
              '#4e57f0',
              '#dd1949',
              '#a9bbfd',
              '#f49d4d',
              '#99a2b3',
              '#f8ca7d',
              '#f9e9ae',
              '#302fcb',
              '#bb3131',
              '#159c7c',
              '#0d8468',
              '#591898',
              '#b8b7b3',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          subtitle: {
            display: true,
            text: 'Job Posting bar chart',
          },
        },
        responsive: true,
      },
    });

    this.pie = new Chart('circle', {
      type: 'pie',
      data: {
        labels: [
          'United States',
          'China',
          'India',
          'Russia',
          'Japan',
          'Germany',
          'Italy',
          'United Kingdom',
          'France',
          'Denmark',
        ],
        datasets: [
          {
            label: 'cities',
            data: [
              5.0, 1.5, 2.4, 3.3, 2.3, 3.9, 3.5, 1.4, 4.1, 2.5, 4.1, 3.2, 2.0,
            ],
            backgroundColor: [
              '#4e57f0',
              '#dd1949',
              '#a9bbfd',
              '#f49d4d',
              '#99a2b3',
              '#f8ca7d',
              '#f9e9ae',
              '#302fcb',
              '#bb3131',
              '#159c7c',
              '#0d8468',
              '#591898',
              '#b8b7b3',
            ],
            borderRadius: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            borderColor: [
              '#4e57f0',
              '#dd1949',
              '#a9bbfd',
              '#f49d4d',
              '#99a2b3',
              '#f8ca7d',
              '#f9e9ae',
              '#302fcb',
              '#bb3131',
              '#159c7c',
              '#0d8468',
              '#591898',
              '#b8b7b3',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
