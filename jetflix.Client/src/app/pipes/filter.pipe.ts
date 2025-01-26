import { Pipe, PipeTransform } from '@angular/core';
import { Show } from '../models/show.model';
import { filterInput } from '../models/filterInput.model';

@Pipe({
    name: 'showFilter',
    standalone: false,
    pure: false
  })

  export class FilterPipe implements PipeTransform {
    transform(shows: Show[], userFilterInput: filterInput): Show[] {
      return shows.filter(show => {
        const genreMatch = userFilterInput.genres.length === 0 || 
            show.genres.some(genre => userFilterInput.genres.includes(genre));
        const languageMatch = userFilterInput.languages.length === 0 ||
            userFilterInput.languages.includes(show.language);
        const ratingMatch = show.rating >= userFilterInput.ratingMin && show.rating <= userFilterInput.ratingMax;
        return genreMatch && ratingMatch && languageMatch;
      });
    }
  
  }