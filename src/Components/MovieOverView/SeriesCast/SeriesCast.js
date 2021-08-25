import styles from "./SeriesCast.module.css";
import Actor from "../../../Images/Hiroyuki_Sanada.jpg";

export const SeriesCast = () => (
  <div>
    <h4>Series Cast</h4>
    <div className={styles.SeriesCont}>
      <div className={styles.box}>
        <div className={styles.cards}>
          <img src={Actor} alt="Actor" />
          <div className={styles.details}>
            <h6>
              <b>Hiroyuki Sanada</b>
            </h6>
            <p>April 07, 2021</p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.cards}>
          <img src={Actor} alt="Actor" />
          <div className={styles.details}>
            <h6>
              <b>Hiroyuki Sanada</b>
            </h6>
            <p>April 07, 2021</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.cards}>
          <img src={Actor} alt="Actor" />
          <div className={styles.details}>
            <h6>
              <b>Hiroyuki Sanada</b>
            </h6>
            <p>April 07, 2021</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.cards}>
          <img src={Actor} alt="Actor" />
          <div className={styles.details}>
            <h6>
              <b>Hiroyuki Sanada</b>
            </h6>
            <p>April 07, 2021</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.cards}>
          <img src={Actor} alt="Actor" />
          <div className={styles.details}>
            <h6>
              <b>Hiroyuki Sanada</b>
            </h6>
            <p>April 07, 2021</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.Crew}>
      <h4>Full Cast and Crew</h4>
    </div>
    <hr />
  </div>
);
