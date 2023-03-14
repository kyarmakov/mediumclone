import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedState } from "./feed-state.interface";

const feedFeatureSelector = createFeatureSelector<FeedState>('feed');

export const feedIsLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedState) => feedState.isLoading
)

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedState) => feedState.data
)

export const feedErrorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedState) => feedState.error
)