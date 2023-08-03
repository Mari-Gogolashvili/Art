import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/environment/environment';
import { Painting, Data, getPaintingResponse} from '../types/paintings';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  baseUrl = ENVIRONMENT.baseUrl;

  private data$ = new BehaviorSubject<Data[]>([]);
  private detailData$=new BehaviorSubject<{}>({});
  private loading$ = new BehaviorSubject<boolean>(false);
  private painting$ = new BehaviorSubject<Painting[]>([]);

  constructor(private http: HttpClient, private router: Router) {}

  get data() {
    return this.data$.asObservable();
  }

  get detailData(){
    return this.detailData$.asObservable();
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
      .get<getPaintingResponse>(`${this.baseUrl}?limit=30`)
      .subscribe((response) => {
        this.data$.next(response.data);
        this.loading$.next(false);
      });
  }



  searchPaintings(query: string) {
    this.loading$.next(true);
    this.http
      .get<getPaintingResponse>(`${this.baseUrl}/search`, {
        params: { q: query },
      })
      .subscribe((response) => {
        this.data$.next(response.data);
        this.loading$.next(false);
      });
  }

  getPaintingById(id: number) {
    return this.http.get<{data: Data}>(`${this.baseUrl}/${id}`);
    
  }

  
}

