import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/appStore";
import styles from "./styles.module.css";
import { NewsDetails } from "../../../entities/news";

export function NewsPage() {
  const currentNews = useAppSelector((state) => state.news.currentNews);
  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <Link to={"/"}>
          <p>Go to home page</p>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.news}>
      <NewsDetails item={currentNews} />
    </main>
  );
}
