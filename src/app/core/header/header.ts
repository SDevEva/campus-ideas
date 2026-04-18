import { Component, inject } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  favoritesService = inject(FavoritesService);
  favorites = this.favoritesService.getFavorites();
}
