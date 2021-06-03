import {
  SearchData,
  SearchSuggestion,
} from './../../../../models/search.model';
import { DemoService } from './../../../../services/demo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'demo-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  _data: SearchData[];
  _suggestions: SearchSuggestion[];
  _queryString: string;

  _showConfirmDialog = false;

  private subs$: Subscription[] = [];

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  handleSuggestionUpdate(q: string): void {
    this.subs$.push(
      this.demoService.getSuggestions(q).subscribe((res) => {
        this._suggestions = res;
      })
    );
  }

  handleSearch(q: string): void {
    this._suggestions = [];
    this._queryString = q;

    this.subs$.push(
      this.demoService.getMatchs(q).subscribe((res) => {
        this._data = res;
      })
    );
  }
}
