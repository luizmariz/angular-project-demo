import { SearchSuggestion, SearchData } from './../models/search.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import data from '../mocks/data.json';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private validStr = /^(?!\s*$).+/;

  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getSuggestions(q: string): Observable<SearchSuggestion[]> {
    return new Observable<SearchSuggestion[]>((observer) => {
      if (!q?.match(this.validStr)) {
        observer.next([]);
        observer.complete();
      }

      const res = data.payload.reduce((acc, cur) => {
        const match = cur.title.match(new RegExp(q?.replace(/\s/g, ''), 'ig'));

        if (match && acc.length <= 4) {
          acc.push({
            match,
            suggestion: cur.title,
          });
        }

        return acc;
      }, []);

      observer.next(res);
      observer.complete();
    });
  }

  getMatchs(q: string): Observable<SearchData[]> {
    return new Observable<SearchData[]>((observer) => {
      if (!q?.match(this.validStr)) {
        observer.next([]);
        observer.complete();
      }

      const res = data.payload.filter((item) =>
        item.title
          ?.replace(/\s/g, '')
          .toLowerCase()
          .includes(q?.replace(/\s/g, '').toLowerCase())
      );

      observer.next(res);
      observer.complete();
    });
  }
}
