import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-favorites',
  standalone: false,
  
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favoriteShows: Show[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(shows => {
      this.favoriteShows = shows;
    });
  }
}
