import { IFilters } from "../../../../shared/interfaces";
import { useAppDispatch } from "../../../../app/appStore";
import { setFilters } from "../../../../entities/news/modal/newsSlice";
import styles from "./styles.module.css";
import { Slider } from "../../../../features/slider";
import { Categories } from "../../../../features/category";
import { Search } from "../../../../features/search";
import { CategoryTypes } from "../../../../entities/category";

interface Props {
  filters: IFilters;
  categories: CategoryTypes[];
}

export function NewsFilters({ filters, categories }: Props) {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
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
