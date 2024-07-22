import { INews } from "../../../../entities/news";
import { NewsItem } from "../../../../entities/news/ui/NewsItem/NewsItem";
import { withSkeleton } from "../../../../shared/hock/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
}
function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);
