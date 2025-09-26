import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';


@Component({
  selector: 'app-gallery',
  imports: [ImageModule, AnimateOnScrollModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.images = [
  'assets/images/spettacolo/spettacolo a7r3 mini-1.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-3.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-4.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-6.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-7.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-8.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-11.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-14.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-17.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-18.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-20.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-22.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-26.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-28.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-31.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-33.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-35.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-36.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-38.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-39.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-42.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-45.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-46.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-48.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-50.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-52.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-54.webp',
  'assets/images/spettacolo/spettacolo a7r3 mini-57.webp',
  // 'assets/images/spettacolo/spettacolo a7r3 mini-59.webp',

  'assets/images/spettacolo/spettacolo a7s3 mini-2.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-3.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-4.webp', // verifica che “maxi-4” sia corretto; se è “mini-4”, rettificalo
  'assets/images/spettacolo/spettacolo a7s3 mini-8.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-12.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-13.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-14.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-15.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-16.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-17.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-30.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-31.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-37.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-38.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-41.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-45.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-53.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-60.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-61.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-62.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-63.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-65.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-79.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-91.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-92.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-93.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-94.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-97.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-99.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-104.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-106.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-110.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-111.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-112.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-114.webp',

  'assets/images/spettacolo/spettacolo a7s3 mini-121.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-123.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-126.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-127.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-128.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-131.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-132.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-138.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-139.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-140.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-141.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-142.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-147.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-151.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-154.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-155.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-160.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-164.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-167.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-168.webp',
  'assets/images/spettacolo/spettacolo a7s3 mini-170.webp',

  'assets/images/spettacolo/spettacolo zv mini (1 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (10 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (15 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (18 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (19 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (22 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (32 of 59).webp',
      'assets/images/spettacolo/spettacolo zv mini (34 of 59).webp',
  'assets/images/spettacolo/spettacolo-zv-mini-_38-of-59_.webp',
  'assets/images/spettacolo/spettacolo zv mini (39 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (41 of 59).webp',
  'assets/images/spettacolo/spettacolo zv mini (50 of 59).webp',
];

  }


}
