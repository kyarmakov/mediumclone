import { createReducer, on } from "@ngrx/store";
import { FeedState } from "./feed-state.interface";
import { feedAction, feedFailureAction, feedSuccessAction } from "./feed.actions";

const initialState: FeedState = {
  isLoading: false,
  data: null,
  error: null,
}

export const feedReducer = createReducer(
  initialState,
  on(feedAction, (state): FeedState => ({
    ...state,
    isLoading: true,
  })),
  on(feedSuccessAction, (state, action): FeedState => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(feedFailureAction, (state): FeedState => ({
    ...state,
    isLoading: false,
  }))
)