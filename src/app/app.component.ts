import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, RouterModule],
  template: `
  <main>
    <section class="w-full h-full">
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home now';
}
