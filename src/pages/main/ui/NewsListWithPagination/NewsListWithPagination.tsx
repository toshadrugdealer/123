import { TOTAL_PAGES } from "../../../../shared/constants/constanst";
import { NewsListWithSkeleton } from "../../../../widgets/news";
import { Pagination } from "../../../../features/pagination";
import { IFilters } from "../../../../shared/interfaces";
import { INews } from "../../../../entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}
export function NewsListWithPagination({ filters, news, isLoading }: Props) {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);
  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsListWithSkeleton
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
}
