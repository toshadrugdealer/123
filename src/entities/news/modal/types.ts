import { CategoryTypes } from "../../category";

export interface INews {
  author: string;
  category: CategoryTypes[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}
