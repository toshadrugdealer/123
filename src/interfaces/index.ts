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

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryTypes | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface CategoriesApiResponse {
  categories: CategoryTypes[];
  description: string;
  status: string;
}

export interface IPaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

export type CategoryTypes =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
