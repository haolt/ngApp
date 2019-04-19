import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.sass']
})
export class VideoDetailComponent implements OnInit {
  @Input() selectedVideo;
  constructor() { }

  ngOnInit() {
  }

}
