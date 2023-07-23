import { Component } from '@angular/core';
//import { Lightbox } from 'ngx-lightbox';
//import 'bs5-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  // album: any = [];
  // albumItem: any = { src: '', caption: '', thumb: '' };
  // images = [
  //   {
  //     src: 'https://unsplash.it/1200/768.jpg?image=251',
  //     thumb: 'https://unsplash.it/1200/768.jpg?image=251',
  //     caption: 'Image 1 Caption'
  //   },
  //   {
  //     src: 'https://unsplash.it/1200/768.jpg?image=251',
  //     thumb: 'https://unsplash.it/1200/768.jpg?image=251',
  //     caption: 'Image 2 Caption'
  //   },
  //   // Add more images here...
  // ];

  // constructor(private lightbox: Lightbox) {}

  // // openLightbox(image: any): void {
  // //   this.album = [];
  // //   this.images.forEach((item) => {
  // //     const src = item.src;
  // //     const caption = item.caption;
  // //     const thumb = item.thumb;
  // //     this.albumItem = { src, caption, thumb };
  // //     this.album.push(this.albumItem); // Use this.albumItem instead of albumItem
  // //   });

  // //   const index = this.images.indexOf(image);
  // //   this.lightbox.open(this.album, index);
  // // }

  // openLightbox(): void {
  //   const album = [{
  //     src: 'https://unsplash.it/1200/768.jpg?image=251',
  //     caption: 'Image 1 Caption',
  //     thumb: 'https://unsplash.it/600.jpg?image=251'
  //   }];

  //   this.lightbox.open(album, 0);
  // }
}
