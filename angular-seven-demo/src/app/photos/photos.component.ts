import { Component, OnInit } from '@angular/core';
import { PHOTOS } from './mock-photos';
// 指定 Angular 所需的元数据。
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
// 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。
export class PhotosComponent implements OnInit {
  photos = PHOTOS;
  
  imgSrc = '';

  constructor() {

  }

  onClick(event, url) {
    this.imgSrc = url;
  }

  ngOnInit() {

  }

}
