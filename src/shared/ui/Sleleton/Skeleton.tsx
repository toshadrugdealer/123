import { useTheme } from "../../../app/providers/ThemeProvider";
import { DirectionType, SkeletonType } from "../../interfaces";
import styles from "./styles.module.css";

interface Props {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
}
export function Skeleton({
  count = 1,
  type = "banner",
  direction = "column",
}: Props) {
  const { isDark } = useTheme();
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={`${type === "banner" ? styles.banner : styles.item} ${
                isDark ? styles.dark : styles.light
              }`}
            ></li>
          ))}
        </ul>
      ) : (
        <li
          className={`${type === "banner" ? styles.banner : styles.item} ${
            isDark ? styles.dark : styles.light
          }`}
        ></li>
      )}
    </>
  );
}
