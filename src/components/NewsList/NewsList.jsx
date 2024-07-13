import { withSkeleton } from "../../helpers/hock/withSkeleton";
import { NewsItem } from "../NewsItem/NewsItem";
import styles from "./styles.module.css";
function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
export const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);
