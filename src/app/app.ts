import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header';
import { FooterComponent } from './core/footer/footer';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ListSuggestionComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'campus-ideas';
}