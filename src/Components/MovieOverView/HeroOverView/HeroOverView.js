import styles from "./HeroOverView.module.css";
import Hrt from "../../../Images/download.png";
import Star from "../../../Images/whitestar.png";
import Play from "../../../Images/unnamed.png";
import background from "../../../Images/herobanner.jpg";
import { LayoutOverView } from "../LayoutOverView";

const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

export const HeroOverView = (props) => {
  let selected = JSON.parse(window.localStorage.getItem("movie_data"));
  const banner = `${imageBaseUrl}/${selected.poster_path}`;
  return (
    <div>
      <div
        className={styles.HeroContainer}
        style={{
          background: `url(${banner}) rgba(0, 0, 0, 0.795) center/cover no-repeat`,
          backgroundBlendMode: `overlay`,
        }}
      >
        <img
          src={`${imageBaseUrl}/${selected.poster_path}`}
          alt=""
          className={styles.HeroImage}
        />
        <div className={styles.HeroDetails}>
          <h2>{selected.original_title}</h2>
          <div className={styles.Genre}>
            <li>
              <div className={styles.borderEn}>TV-14</div>
            </li>
            <li>Action.</li>
            <li>43m</li>
          </div>
          <div className={styles.Heroicons}>
            <div className={styles.Vote}>
              <p>86</p>
            </div>
            <div className={styles.Score}>User Score</div>
            <div>
              <img src={Hrt} alt="" className={styles.icon} />
            </div>
            <div>
              <img src={Star} alt="" className={styles.icon} />
            </div>
            <div>
              <img src={Play} alt="" className={styles.icon} />
            </div>
          </div>
          <p>
            <em>His mind is a mystery, he's methods are miracle</em>
          </p>
          <h4>Overview</h4>
          <p>{selected.overview}</p>
          <div className={styles.Author}>
            <h6>Nneoma Onuoha</h6>
            <p>Creator</p>
          </div>
        </div>
      </div>
      <LayoutOverView />
    </div>
  );
};
