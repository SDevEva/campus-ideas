import { Injectable, signal } from '@angular/core';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites = signal<Suggestion[]>([]);

  getFavorites() {
    return this.favorites.asReadonly();
  }

  addToFavorites(suggestion: Suggestion) {
    if (!this.favorites().find(s => s.id === suggestion.id)) {
      this.favorites.update(favs => [...favs, suggestion]);
    }
  }
}
