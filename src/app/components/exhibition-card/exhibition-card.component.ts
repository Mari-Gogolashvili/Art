import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/types/paintings';
import { NgxImageCompressService } from 'ngx-image-compress';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exhibition-card',
  templateUrl: './exhibition-card.component.html',
  styleUrls: ['./exhibition-card.component.css'],
})
export class ExhibitionCardComponent implements OnInit {
  @Input() data!: Data;
  @Input() loading = false;
  compressedImageUrl: string = '';
  defaultImageUrl: string = '../../../assets/images/img_not_found.jpg';

  constructor(
    private imageCompress: NgxImageCompressService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchAndCompressImage(this.data.image_id)
      .then((compressedUrl) => {
        this.compressedImageUrl = compressedUrl;
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
        this.compressedImageUrl = this.defaultImageUrl;
      });
  }

  fetchAndCompressImage(imageId: string): Promise<string> {
    const iiifUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

    return this.http
      .get(iiifUrl, { responseType: 'blob' })
      .toPromise()
      .then(
        (blob) => {
          if (blob instanceof Blob) {
            return this.readBlobAsDataURL(blob).then((dataUrl) => {
              return this.compressImage(dataUrl);
            });
          } else {
            throw new Error('Invalid image response.');
          }
        },
        (error) => {
          throw new Error('Failed to fetch image: ' + error.message);
        }
      );
  }

  readBlobAsDataURL(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve(dataUrl);
      };
      reader.onerror = () => {
        reject('Failed to read the image.');
      };
      reader.readAsDataURL(blob);
    });
  }

  compressImage(dataUrl: string): Promise<string> {
    return this.imageCompress
      .compressFile(dataUrl, 0, 50, 50)
      .then((compressedImage) => compressedImage);
  }
}
