import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFeedAction } from "./store/feed.actions";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() url: string;

  constructor(private _store: Store) {}
  
  ngOnInit(): void {
    this._store.dispatch(getFeedAction({ url: this.url }))
url:   { }
}} 