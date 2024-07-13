import { formatDateAgo } from "../../helpers/formatTimeAgo";
import { Image } from "./../Image/Image";
import styles from "./styles.module.css";
import noLogo from "./../../assets/noLogo.png";

export function NewsBanner({ item }) {
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
