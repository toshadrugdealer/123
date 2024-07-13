import { TOTAL_PAGES } from "../../constants/constanst";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { NewsListWithSkeleton } from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./styles.module.css";

export function NewsByFilters({ filters, changeFilter, isLoading, news }) {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };
  return (
    <section className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsListWithSkeleton isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
}
