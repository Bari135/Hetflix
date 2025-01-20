import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchInput: string = '';
  
  constructor(private router: Router) {}
  searchMovie(){
    this.router.navigate(['/search-results'], { queryParams: { query: this.searchInput } });
  }
}
