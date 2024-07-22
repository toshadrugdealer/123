import { IFilters } from "../../../../shared/interfaces";
import { useAppDispatch } from "./../../../../app/appStore";
import { useGetCategoriesQuery } from "../../../../entities/category/api/categoriesApi";
import { setFilters } from "../../../../entities/news/modal/newsSlice";
import styles from "./styles.module.css";
import { Slider } from "../../../../features/slider";
import { Categories } from "../../../../features/category";
import { Search } from "../../../../features/search";

interface Props {
  filters: IFilters;
}

export function NewsFilters({ filters }: Props) {
  const dispatch = useAppDispatch();
  const { data } = useGetCategoriesQuery(null);
  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategoty={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
}
