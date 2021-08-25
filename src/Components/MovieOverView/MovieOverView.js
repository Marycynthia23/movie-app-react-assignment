import styles from "./MovieOverView.module.css";
import { HeroOverView } from "./HeroOverView";
export const MovieOverView = () => (
  <div className={styles.MovieOverView}>
    <HeroOverView />
  </div>
);
