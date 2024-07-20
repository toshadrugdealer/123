import styles from "./styles.module.css";
interface Props {
  image: string;
}
export function Image({ image }: Props) {
  return (
    <div className={styles.wrapper}>
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
