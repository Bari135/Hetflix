import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private readonly STORAGE_KEY = 'searchHistory';
  private readonly MAX_HISTORY_ITEMS = 5;
  private searchHistory: string[] = [];
  private searchHistorySubject = new BehaviorSubject<string[]>([]);

  constructor() {
    this.loadHistory();
  }

  private loadHistory() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.searchHistory = JSON.parse(stored);
      this.searchHistorySubject.next(this.searchHistory);
    }
  }

  addSearch(query: string) {
    if (!query.trim()) return;
    
    const index = this.searchHistory.indexOf(query);
    if (index > -1) {
      this.searchHistory.splice(index, 1);
    }
    
    //to make it look like a new search if it was already in history and added again
    this.searchHistory.unshift(query);
    

    if (this.searchHistory.length > this.MAX_HISTORY_ITEMS) {
      this.searchHistory = this.searchHistory.slice(0, this.MAX_HISTORY_ITEMS);
    }
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.searchHistory));
    this.searchHistorySubject.next(this.searchHistory);
  }

  getSearchHistory() {
    return this.searchHistorySubject.asObservable();
  }

  clearHistory() {
    this.searchHistory = [];
    localStorage.removeItem(this.STORAGE_KEY);
    this.searchHistorySubject.next(this.searchHistory);
  }
}