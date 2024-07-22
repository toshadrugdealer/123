import { Header } from "../../widgets/header/ui";
import { useTheme } from "../providers/ThemeProvider";
import { MainPage } from "../../pages/main";
import "../../shared/index.css";

function BaseLayout() {
  const { isDark } = useTheme();
  if (isDark) {
    document.body.style.backgroundColor = "#23272f";
  } else {
    document.body.style.backgroundColor = "white";
  }
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default BaseLayout;
