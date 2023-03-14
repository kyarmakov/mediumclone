import { Article } from "src/app/shared/interfaces/article.interface";

export interface FeedResponse {
  articles: Article[],
  articlesCount: number,
}