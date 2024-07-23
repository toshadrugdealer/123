import { formatDateAgo } from "../../../../shared/helpers/formatTimeAgo";
import styles from "./styles.module.css";
import { INews } from "../../modal/types";
import { useTheme } from "../../../../app/providers/ThemeProvider";
import noLogo from "../../../../shared/assets/noLogo.png";
import { Image } from "../../../../shared/ui/Image/Image";

interface Props {
  item: INews;
}
export function NewsDetails({ item }: Props) {
  const { isDark } = useTheme();
  return (
    <div className={styles.details}>
      <Image image={item?.image === "None" ? noLogo : item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language})
        </p>
        <a target="_blank" href={item.url}>
          <p>Read more...</p>
        </a>
        <p className={styles.extra}>
          {formatDateAgo(item.published)} by {item.author}
        </p>
        <ul>
          {item.category?.map((category) => {
            return (
              <button
                className={`${styles.active} ${
                  isDark ? styles.dark : styles.light
                }`}
              >
                {category}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
