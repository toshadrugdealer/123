import { useTheme } from "../../../app/providers/ThemeProvider";
import styles from "./styles.module.css";
interface Props {
  image: string;
}
export function Image({ image }: Props) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      {image ? (
        <img
          src={image}
          alt="изображение отсутствует"
          className={styles.image}
        />
      ) : null}
    </div>
  );
}
