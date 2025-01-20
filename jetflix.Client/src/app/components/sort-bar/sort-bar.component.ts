import { Component, Input } from '@angular/core';
import { filterInput } from '../../models/filterInput.model';

@Component({
  selector: 'app-sort-bar',
  standalone: false,
  
  templateUrl: './sort-bar.component.html',
  styleUrl: './sort-bar.component.css'
})
export class SortBarComponent {
  showGenreInput: boolean = false;
  showLanguageInput: boolean = false
  showRatingInput: boolean = false;
  genreInput: string = '';
  languageInput: string = '';
  ratingInput: number = 0;
  @Input() showsFilter!: filterInput;

  toggleGenreInput() {
    this.showGenreInput = !this.showGenreInput;
  }
  toggleLangeInput() {
    this.showLanguageInput = !this.showLanguageInput;
  }

  toggleRating(){
    this.showRatingInput = !this.showRatingInput;
  }

  addGenre() {
    if (this.genreInput.trim()) {
      this.showsFilter.genres.push(this.genreInput.trim());
      this.genreInput = '';

    }
  }
  clearGenres() {
    this.showsFilter.genres = [];
    
  }

  addLanguage() {
    if (this.languageInput.trim()) {
      this.showsFilter.languages.push(this.languageInput.trim());
      this.languageInput = '';
    }
  }
  clearLanguages(){
    this.showsFilter.languages = [];
  }

  addRating() {
    if (this.ratingInput > 0 && this.ratingInput <= 10) {
      this.showsFilter.rating = this.ratingInput;
      this.ratingInput = 0;
    }
  }

  clearRating(){
    this.showsFilter.rating = 0;
  }
}
