import { FeedResponse } from "../interfaces/feed-response.interface";

export interface FeedState {
  isLoading: boolean;
  data: FeedResponse | null;
  error: string | null;
}