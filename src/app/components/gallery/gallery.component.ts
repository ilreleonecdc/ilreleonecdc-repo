import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';

export interface Foto{
  url: string;
  alt?: string;
  isHorizontal?:boolean
}
@Component({
  selector: 'app-gallery',
  imports: [CommonModule, ImageModule, AnimateOnScrollModule, SkeletonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Foto[] = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.images = [
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-1.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-3.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-4.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-6.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-7.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-8.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-11.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-14.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-17.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-18.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-20.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-22.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-26.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-28.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-31.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-33.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-35.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-36.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-38.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-39.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-42.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-45.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-46.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-48.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-50.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-52.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-54.webp'},
  {url:'assets/images/spettacolo/spettacolo a7r3 mini-57.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-2.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-3.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-4.webp'}, // verifica che “maxi-4” sia corretto; se è “mini-4”, rettificalo
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-8.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-12.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-13.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-14.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-15.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-16.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-17.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-30.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-31.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-37.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-38.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-41.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-45.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-53.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-60.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-61.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-62.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-63.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-65.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-79.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-91.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-92.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-93.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-94.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-97.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-99.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-104.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-106.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-110.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-111.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-112.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-114.webp'},

  {url:'assets/images/spettacolo/spettacolo a7s3 mini-121.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-123.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-126.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-127.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-128.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-131.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-132.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-138.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-139.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-140.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-141.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-142.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-147.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-151.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-154.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-155.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-160.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-164.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-167.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-168.webp'},
  {url:'assets/images/spettacolo/spettacolo a7s3 mini-170.webp'},

  {url:'assets/images/spettacolo/spettacolo zv mini (1 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo zv mini (10 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo zv mini (15 of 59).webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo zv mini (18 of 59).webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo zv mini (19 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo zv mini (22 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo zv mini (32 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo zv mini (34 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo-zv-mini-_38-of-59_.webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo zv mini (39 of 59).webp', isHorizontal:true},
  {url:'assets/images/spettacolo/spettacolo zv mini (41 of 59).webp'},
  {url:'assets/images/spettacolo/spettacolo zv mini (50 of 59).webp'},
];
  }


}
