import { formatDateAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";
import noLogo from "./../../assets/noLogo.png";
export function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${
            item.image === "None" ? noLogo : item.image
          })`,
        }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatDateAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
