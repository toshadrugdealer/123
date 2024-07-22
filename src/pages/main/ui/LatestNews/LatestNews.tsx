import { BannersListWithSkeleton } from "../../../../widgets/news/ui";
import { useGetLatestNewsQuery } from "../../../../entities/news/api/newsApi";
import styles from "./styles.module.css";
export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery({ page_size: 12 });
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
