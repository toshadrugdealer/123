import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}
export function Search({ keywords, setKeywords }: Props) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search news"
      />
    </div>
  );
}
