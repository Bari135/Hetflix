import { Component, Input } from '@angular/core';
import { Show } from '../../models/show.model';
import { Episode } from '../../models/episode.model';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';


@Component({
  selector: 'app-show',
  standalone: false,
  
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  @Input() show: Show = {} as Show;
  
  constructor(private router: Router, private favoriteService: FavoritesService) {}

  navigateToEpisodes() {
    this.router.navigate(['/episodes', this.show.id]);
  }

  toggleFavorite() {
    if (this.isFavorite()) {
      this.favoriteService.removeFromFavorites(this.show);
    } else {
      this.favoriteService.addToFavorites(this.show);
    }
  }

  isFavorite(): boolean {
    return this.favoriteService.isFavorite(this.show);
  }
}

