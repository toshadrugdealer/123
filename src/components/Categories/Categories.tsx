import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoryTypes } from "../../interfaces";

interface Props {
  categories: CategoryTypes[];
  setSelectedCategory: (category: CategoryTypes | null) => void;
  selectedCategoty: CategoryTypes | null;
}
export const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategoty }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategoty ? styles.active : styles.item}
        >
          all
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategoty === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);
Categories.displayName = "Categories";
