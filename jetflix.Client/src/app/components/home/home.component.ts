import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  searchInput: string = '';
  searchHistory: string[] = [];
  showHistory: boolean = false;
  
  constructor(private router: Router,
    private searchHistoryService: SearchHistoryService) {}
    ngOnInit() {
      this.searchHistoryService.getSearchHistory().subscribe(history => {
        this.searchHistory = history;
      });
    }
  
    searchMovie() {
      if (this.searchInput.trim()) {
        this.searchHistoryService.addSearch(this.searchInput);
        this.router.navigate(['/search-results'], { queryParams: { query: this.searchInput } });
        this.showHistory = false;
      }
      else {
        this.showEmptySearchAlert();
      }
    }

    showEmptySearchAlert() {
      alert('Do you want to search for nothing?');
    }
  
    selectHistoryItem(query: string) {
      this.searchInput = query;
      this.searchMovie();
    }
  
    onFocus() {
      this.showHistory = true;
    }
  
    onBlur() {
      
      setTimeout(() => {
        this.showHistory = false;
      }, 200);
    }
  
    clearHistory() {
      this.searchHistoryService.clearHistory();
    }
  }