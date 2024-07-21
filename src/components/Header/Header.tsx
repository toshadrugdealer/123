import { formatDate } from "../../helpers/formatDate";
import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <button
        className={`${styles.themeBtn} ${isDark ? styles.dark : styles.light}`}
        onClick={toggleTheme}
      >
        {isDark ? "Light" : "Dark"} mode
      </button>
    </header>
  );
}
