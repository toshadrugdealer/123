import { Header } from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";
import { Main } from "./pages/Main/Main";

function App() {
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
        <Main />
      </div>
    </div>
  );
}

export default App;
