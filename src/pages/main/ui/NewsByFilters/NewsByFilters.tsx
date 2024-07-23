import { NewsFilters } from "../../../../widgets/news";
import { useAppSelector } from "../../../../app/appStore";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "../../../../entities/category/api/categoriesApi";
import { NewsListWithPagination } from "../NewsListWithPagination/NewsListWithPagination";
import { useGetNewsQuery } from "../../../../entities/news/api/newsApi";
import { useDebounce } from "../../../../shared/hooks/useDebounce";

export function NewsByFilters() {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const { data } = useGetCategoriesQuery(null);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />
      <NewsListWithPagination
        isLoading={isLoading}
        news={news}
        filters={filters}
      />
    </section>
  );
}
