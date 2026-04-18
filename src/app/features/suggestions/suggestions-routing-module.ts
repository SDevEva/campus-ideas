import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion';
import { SuggestionDetail } from './suggestion-detail/suggestion-detail';
import { Suggestions } from './suggestions/suggestions';
import { SuggestionForm } from './suggestion-form/suggestion-form';

const routes: Routes = [
  {
    path: '',
    component: Suggestions,
    children: [
      { path: '', component: ListSuggestionComponent },
      { path: 'add', component: SuggestionForm },
      { path: ':id', component: SuggestionDetail }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionsRoutingModule {}
