import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = '/api/videos';
  constructor(
    private http: HttpClient,
    // private _http: Http
  ) { }
  getVideo() {
    return this.http.get(
      this.apiUrl
    );
  }
  // getVideo() {
  //   return this._http.get(
  //     this.apiUrl
  //   ).map((res: Response) => {
  //       res.json();
  //     }
  //   );
  // }
}
