import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, switchMap, tap } from 'rxjs';
import { PaintingsService } from 'src/app/services/paintings.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent {
  private data$ = this.paintingsService.data;
  private loading$ = this.paintingsService.loading;

  private queryParams$ = this.route.queryParamMap.pipe(
    tap((paramMap) => {
      const search = paramMap.get('search');
      if (search) {
        this.paintingsService.searchPaintings(search);
      } else {
        this.paintingsService.getPaintings();
      }
    })
  );



  vm$ = combineLatest([this.data$, this.loading$, this.queryParams$]).pipe(
    map((array) => {
      const [data, loading, queryParams] = array;
      return {
        data,
        loading,
        queryParams,
      };
    })
  );
  constructor(
    private paintingsService: PaintingsService,
    private route: ActivatedRoute
  ) {}
}
