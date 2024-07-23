import { useGetLatestNewsQuery } from "../../../../entities/news/api/newsApi";
import { NewsListWithSkeleton } from "../../../../widgets/news";
import styles from "./styles.module.css";
export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery({ page_size: 12 });
  return (
    <section className={styles.section}>
      <NewsListWithSkeleton
        direction="row"
        type="banner"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
