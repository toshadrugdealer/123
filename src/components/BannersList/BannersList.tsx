import { withSkeleton } from "../../helpers/hock/withSkeleton";
import { INews } from "../../interfaces";
import { NewsBanner } from "../NewsBanner/NewsBanner";
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
