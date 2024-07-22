import { TOTAL_PAGES } from "../../../../shared/constants/constanst";
import { useDebounce } from "../../../../shared/hooks/useDebounce";
import { useGetNewsQuery } from "../../../../entities/news/api/newsApi";
import { setFilters } from "../../../../entities/news/modal/newsSlice";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { NewsListWithSkeleton } from "../../../../widgets/news/ui";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../../../app/appStore";
import { Pagination } from "../../../../features/pagination";

export function NewsByFilters() {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />
      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
}
