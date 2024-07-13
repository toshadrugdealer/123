import styles from "./styles.module.css";
import { BannersListWithSkeleton } from "../BannersList/BannersList";
export function LatestNews({ banners, isLoading }) {
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
}
