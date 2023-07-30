import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeBackgroundComponent } from './components/home-background/home-background.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { GalleryDirective } from './directives/gallery.directive';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExhibitionsComponent } from './pages/exhibitions/exhibitions.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitionCardComponent } from './components/exhibition-card/exhibition-card.component';
import { AllComponent } from './pages/exhibitions/all/all.component';
import { DetailsComponent } from './pages/exhibitions/details/details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeBackgroundComponent,
    ImageGalleryComponent,
    GalleryDirective,
    PaintingsComponent,
    FooterComponent,
    ExhibitionsComponent,
    CarouselComponent,
    ExhibitionCardComponent,
    AllComponent,
    DetailsComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
