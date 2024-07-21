import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import styles from "./styles.module.css";

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
