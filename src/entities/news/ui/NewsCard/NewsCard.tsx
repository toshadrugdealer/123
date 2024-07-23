import { formatDateAgo } from "../../../../shared/helpers/formatTimeAgo";
import styles from "./styles.module.css";
import { INews } from "../../modal/types";
import { useTheme } from "../../../../app/providers/ThemeProvider";
import noLogo from "../../../../shared/assets/noLogo.png";
import { Image } from "../../../../shared/ui/Image/Image";
import { ReactNode } from "react";

interface Props {
  item: INews;
  type: "banner" | "item";
  viewNewsSlot?: (news: INews) => ReactNode;
}
export function NewsCard({ item, type = "item", viewNewsSlot }: Props) {
  const { isDark } = useTheme();
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image === "None" ? noLogo : item.image} />
      ) : (
        <div
          className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}
          style={{
            backgroundImage: `url(${
              item.image === "None" ? noLogo : item.image
            })`,
          }}
        ></div>
      )}
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatDateAgo(item.published)} by {item.author}
        </p>
      </div>
      {viewNewsSlot ? viewNewsSlot(item) : null}
    </li>
  );
}
