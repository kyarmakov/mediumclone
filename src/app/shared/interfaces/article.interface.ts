import { Profile } from "./profile.interface";

export interface Article {
  author: Profile;
  body: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
}