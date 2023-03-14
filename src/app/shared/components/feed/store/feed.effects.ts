import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedResponse } from "../interfaces/feed-response.interface";
import { FeedService } from "../services/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./feed.actions";

@Injectable()
export class FeedEffects {
  getFeed$ = createEffect(() => this._actions$.pipe(
    ofType(getFeedAction),
    switchMap(({ url }) => {
      return this._feedService.getFeed(url).pipe(
        map((feed: FeedResponse) => {
          return getFeedSuccessAction({ feed });
        }),
        catchError(() => of(getFeedFailureAction()))
      )
    })
  ))

  constructor(private _actions$: Actions, private _feedService: FeedService) {}
}