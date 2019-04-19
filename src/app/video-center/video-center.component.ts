import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.sass']
})
export class VideoCenterComponent implements OnInit {

  public videos: any; // Tại sao là any mà ko phải Array[Video]
  public selectedVideo: Video;
  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.videoService.getVideo().subscribe(
      (data) => {
        this.videos = data;
      }
    );
  }

  onSelectedVideo(sltVideo: Video) {
    this.selectedVideo = sltVideo;
    console.log(this.selectedVideo);
  }
}
