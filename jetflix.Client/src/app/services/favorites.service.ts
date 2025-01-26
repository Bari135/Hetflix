import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'favoriteShows';
  private favorites: Show[] = [];
  private favoritesSubject = new BehaviorSubject<Show[]>([]);

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.favorites = JSON.parse(stored);
      this.favoritesSubject.next(this.favorites);
    }
  }

  private saveFavorites() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.favorites));
    this.favoritesSubject.next(this.favorites);
  }

  addToFavorites(show: Show) {
    if (!this.isFavorite(show)) {
      this.favorites.push(show);
      this.saveFavorites();
    }
  }

  removeFromFavorites(show: Show) {
    const index = this.favorites.findIndex(s => s.id === show.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  isFavorite(show: Show): boolean {
    return this.favorites.some(s => s.id === show.id);
  }

  getFavorites() {
    return this.favoritesSubject.asObservable();
  }
}