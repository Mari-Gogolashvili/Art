import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/environment/environment';
import { Painting, data, getPaintingResponse } from '../types/paintings';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  baseUrl = ENVIRONMENT.baseUrl;
  url = ENVIRONMENT.url;


  private data$ = new BehaviorSubject<data[]>([]);
  private loading$ = new BehaviorSubject<boolean>(false);
  private painting$ = new BehaviorSubject<Painting[]>([]);
  constructor(private http: HttpClient, private router: Router) {}

  get data() {
    return this.data$.asObservable();
  }

  get loading() {
    return this.loading$.asObservable();
  }
  get paintings() {
    return this.painting$.asObservable();
  }

  getPaintings() {
    this.loading$.next(true);
    return this.http
      .get<getPaintingResponse>(
        `${this.baseUrl}/${this.url}?limit=80`
      )
      .subscribe((response) => {
        this.data$.next(response.data);
        this.loading$.next(false);
      });
  }
  searchPaintings() {}



}
