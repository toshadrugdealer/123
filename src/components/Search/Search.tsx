import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}
export function Search({ keywords, setKeywords }: Props) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        className={`${styles.input} ${isDark ? styles.dark : styles.light}`}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search news"
      />
    </div>
  );
}
