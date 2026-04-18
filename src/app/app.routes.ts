import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { ListSuggestionComponent } from './features/suggestions/list-suggestion/list-suggestion';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'listSuggestion', component: ListSuggestionComponent },
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions-module').then(m => m.SuggestionsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users-module').then(m => m.UsersModule) },
  { path: '**', component: Notfound }
];