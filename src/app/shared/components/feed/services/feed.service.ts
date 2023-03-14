import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FeedResponse } from "../interfaces/feed-response.interface";

@Injectable()
export class FeedService {
  constructor(private _http: HttpClient) {}

  getFeed(url: string): Observable<FeedResponse> {
    const fullUrl = environment.apiUrl + url;
    return this._http.get<FeedResponse>(fullUrl);
  }
}