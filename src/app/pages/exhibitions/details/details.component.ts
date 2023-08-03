import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaintingsService } from 'src/app/services/paintings.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  detailData$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) =>
      this.paintingsService.getPaintingById(Number(paramMap.get('id')))
    )
  );
  constructor(
    private activatedRoute: ActivatedRoute,
    private paintingsService: PaintingsService
  ) {}
}
