import styles from "./styles.module.css";
export function Categories({
  categories,
  setSelectedCategory,
  selectedCategoty,
}) {
  return (
    <div className={styles.categories}>
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
