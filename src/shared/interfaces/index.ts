import { CategoryTypes } from "../../entities/category";

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryTypes | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";
