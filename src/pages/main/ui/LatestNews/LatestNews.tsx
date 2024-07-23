import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../app/appStore";
import { INews } from "../../../../entities/news";
import { useGetLatestNewsQuery } from "../../../../entities/news/api/newsApi";
import { setCurrentNews } from "../../../../entities/news/modal/newsSlice";
import { NewsListWithSkeleton } from "../../../../widgets/news";
import styles from "./styles.module.css";
export function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery({ page_size: 12 });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };
  return (
    <section className={styles.section}>
      <NewsListWithSkeleton
        viewNewsSlot={(news: INews) => (
          <p style={{ cursor: "pointer" }} onClick={() => navigateTo(news)}>
            view more...
          </p>
        )}
        direction="row"
        type="banner"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}
