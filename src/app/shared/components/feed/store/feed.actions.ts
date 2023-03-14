import { createAction, props } from "@ngrx/store";
import { FeedResponse } from "../interfaces/feed-response.interface";
import { FeedActionsEnum } from "./feed-actions.enum";

export const feedAction = createAction(
  FeedActionsEnum.GET_FEED,
  props<{ url: string }>()
)

export const feedSuccessAction = createAction(
  FeedActionsEnum.GET_FEED_SUCCESS,
  props<{ feed: FeedResponse }>()
)

export const feedFailureAction = createAction(
  FeedActionsEnum.GET_FEED_FAILURE,
)