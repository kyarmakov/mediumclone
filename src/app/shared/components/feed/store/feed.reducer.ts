import { createReducer, on } from "@ngrx/store";
import { FeedState } from "./feed-state.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./feed.actions";

const initialState: FeedState = {
  isLoading: false,
  data: null,
  error: null,
}

export const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state): FeedState => ({
    ...state,
    isLoading: true,
  })),
  on(getFeedSuccessAction, (state, action): FeedState => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(getFeedFailureAction, (state): FeedState => ({
    ...state,
    isLoading: false,
  }))
)