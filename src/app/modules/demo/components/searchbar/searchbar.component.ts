import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { SearchSuggestion } from './../../../../models/search.model';

@Component({
  selector: 'demo-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  _inputValue: FormControl;

  @Input() suggestions: SearchSuggestion[];

  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  @Output() searchClicked: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this._inputValue = this.fb.control('');
  }

  ngOnInit(): void {
    this._inputValue.valueChanges.subscribe((value: string) => {
      this.valueChanged.emit(value);
    });
  }

  handleSearch(): void {
    this.searchClicked.emit(this._inputValue.value);
    this._inputValue.reset();
  }

  handleSuggestionSelect(suggestionIndex: number) {
    this._inputValue.setValue(this.suggestions[suggestionIndex].suggestion);
    this.handleSearch();
  }
}
