import styles from "./LayoutOverView.module.css";
import { SeriesCast } from "../SeriesCast";
import { MediaInfo } from "../MediaInfo";

export const LayoutOverView = () => (
  <div>
    <div className={styles.LayoutCont}>
      <SeriesCast />
      <MediaInfo />
    </div>
  </div>
);
