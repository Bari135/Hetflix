import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filterInput } from '../../models/filterInput.model';


@Component({
  selector: 'app-sort-bar',
  standalone: false,
  
  templateUrl: './sort-bar.component.html',
  styleUrl: './sort-bar.component.css'
})
export class SortBarComponent {

  @Input() showsFilter: filterInput = {} as filterInput;
  @Input() genres: Set<string> = new Set<string>(); 
  @Input() languages: Set<string> = new Set<string>();


  selectedGenres: { [key: string]: boolean } = {};
  selectedLanguages: { [key: string]: boolean } = {};

  onFilterToggle(filterName: 'genres' | 'languages', key: string) {
    if (filterName === 'genres' ? this.selectedGenres[key] : this.selectedLanguages[key]) {
      if (!this.showsFilter[filterName].includes(key)) {
        this.showsFilter[filterName].push(key);
      }
    } else {
      this.showsFilter[filterName] = this.showsFilter[filterName].filter(item => item !== key);
    }
  }


  clearFilter(filterName: 'genres' | 'languages' | 'rating') {
    if (filterName === 'genres') {
      this.showsFilter.genres = [];
      this.selectedGenres = {};
    } else if (filterName === 'languages') {
      this.showsFilter.languages = [];
      this.selectedLanguages = {};
    } else {
      this.showsFilter.ratingMin = 0;
      this.showsFilter.ratingMax = 10;
    }
  }

  

  clearAllFilters() {
    this.clearFilter('genres');
    this.clearFilter('languages');
    this.clearFilter('rating');
  }

}

