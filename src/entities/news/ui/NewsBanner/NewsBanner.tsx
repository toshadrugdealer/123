import { formatDateAgo } from "../../../../shared/helpers/formatTimeAgo";
import styles from "./styles.module.css";
import noLogo from "../../../../shared/assets/noLogo.png";
import { INews } from "../../modal/types";
import { Image } from "../../../../shared/ui/Image/Image";

interface Props {
  item: INews;
}

export function NewsBanner({ item }: Props) {
  return (
    <div className={styles.banner}>
      <Image image={item.image === "None" ? noLogo : item.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatDateAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}
