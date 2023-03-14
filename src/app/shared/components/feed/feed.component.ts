import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FeedResponse } from "./interfaces/feed-response.interface";
import { feedAction } from "./store/feed.actions";
import { feedDataSelector, feedErrorSelector, feedIsLoadingSelector } from "./store/feed.selectors";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() url: string;

  feed$: Observable<FeedResponse | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private _store: Store) {}
  
  ngOnInit(): void {
    this._store.dispatch(feedAction({ url: this.url }));
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.feed$ = this._store.select(feedDataSelector);
    this.isLoading$ = this._store.select(feedIsLoadingSelector);
    this.error$ = this._store.select(feedErrorSelector);
  }

} 