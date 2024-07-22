import { INews } from "../../../../entities/news";
import { NewsBanner } from "../../../../entities/news/ui/NewsBanner/NewsBanner";
import { withSkeleton } from "../../../../shared/hock/withSkeleton";
import styles from "./styles.module.css";
interface Props {
  banners?: INews[] | null;
}

function BannersList({ banners }: Props) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}
export const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row"
);
