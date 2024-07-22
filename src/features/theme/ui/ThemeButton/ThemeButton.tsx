import { useTheme } from "../../../../app/providers/ThemeProvider";
import styles from "./styles.module.css";
export function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <button
        className={`${styles.themeBtn} ${isDark ? styles.dark : styles.light}`}
        onClick={toggleTheme}
      >
        {isDark ? "Light" : "Dark"} Mode
      </button>
    </>
  );
}
