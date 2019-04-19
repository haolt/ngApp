import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass'],
})
export class VideoListComponent implements OnInit {
  @Input() videos;
  @Output() selectedVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(video: Video) {
    this.selectedVideo.emit(video);
  }
}
