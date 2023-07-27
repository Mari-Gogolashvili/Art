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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
