import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing-module';
import { SuggestionDetail } from './suggestion-detail/suggestion-detail';
import { Suggestions } from './suggestions/suggestions';

@NgModule({
  declarations: [SuggestionDetail, Suggestions],
  imports: [CommonModule, SuggestionsRoutingModule],
})
export class SuggestionsModule {}
