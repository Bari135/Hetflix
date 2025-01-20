import { Component, Input, OnInit } from '@angular/core';
import { GetShowsService } from '../../services/get-shows.service';
import { Show } from '../../models/show.model';
import { ActivatedRoute } from '@angular/router';
import { filterInput } from '../../models/filterInput.model';


@Component({
  selector: 'app-search-results',
  standalone: false,
  
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  @Input() searchInput!: string;
  searchResults: Show[] = [];
  showsFilter!: filterInput;

  constructor(private route: ActivatedRoute, private getShows: GetShowsService) {
    this.showsFilter = {
      genres: [],
      languages: [],
      rating: 0
    };
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchInput = params['query'];
      this.loadResults();
    });
  }

    loadResults() {
      this.getShows.getShows(this.searchInput).subscribe((data: any[]) => {
        this.searchResults = data.map(item => ({
          name: item.showName,
          genres: item.generes,
          rating: item.rating,
          image: item.image,
          id: item.id,
          url: item.url || '',
          summary: item.summary || '',
          language: item.language || ''
        }));
      });
    }
  }