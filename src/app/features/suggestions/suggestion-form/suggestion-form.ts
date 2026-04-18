import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './suggestion-form.html',
  styleUrl: './suggestion-form.css',
})
export class SuggestionForm {
  suggestionForm: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router);

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor() {
    this.suggestionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      category: ['', Validators.required],
      date: [new Date().toLocaleDateString('fr-CA')], 
      status: ['en attente']
    });
  }

  get f() {
    return this.suggestionForm.controls;
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      const newSuggestion: Suggestion = {
        id: Math.floor(Math.random() * 1000) + 10,
        title: this.suggestionForm.value.title,
        description: this.suggestionForm.value.description,
        category: this.suggestionForm.value.category,
        date: new Date(),
        status: 'en_attente',
        nbLikes: 0
      };

      this.router.navigate(['/suggestions'], { state: { data: newSuggestion } });
    }
  }
}

