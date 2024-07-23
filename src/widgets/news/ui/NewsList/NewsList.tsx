import { INews, NewsCard } from "../../../../entities/news";
import { withSkeleton } from "../../../../shared/hock/withSkeleton";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction: "row" | "column";
}
function NewsList({ news, type = "item" }: Props) {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} />;
      })}
    </ul>
  );
}
export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);
