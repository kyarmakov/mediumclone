import { createAction, props } from "@ngrx/store";
import { FeedResponse } from "../interfaces/feed-response.interface";
import { FeedActionsEnum } from "./feed-actions.enum";

export const getFeedAction = createAction(
  FeedActionsEnum.GET_FEED,
  props<{ url: string }>()
)

export const getFeedSuccessAction = createAction(
  FeedActionsEnum.GET_FEED_SUCCESS,
  props<{ feed: FeedResponse }>()
)

export const getFeedFailureAction = createAction(
  FeedActionsEnum.GET_FEED_FAILURE,
)