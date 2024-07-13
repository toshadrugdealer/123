import styles from "./styles.module.css";
import { withSkeleton } from "../../helpers/hock/withSkeleton";
import { NewsBanner } from "../NewsBanner/NewsBanner";

function BannersList({ banners }) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}
export const BannersListWithSkeleton = withSkeleton(
  BannersList,
  "banner",
  10,
  "row"
);
