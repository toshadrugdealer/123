import { cloneElement, ReactElement, useRef } from "react";
import styles from "./styles.module.css";
import { useTheme } from "../../../../app/providers/ThemeProvider";

interface Props {
  children: ReactElement;
  step?: number;
}
export function Slider({ children, step = 200 }: Props) {
  const { isDark } = useTheme();
  const sliderRef = useRef<HTMLElement | null>(null);
  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {"<"}
      </button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
}
