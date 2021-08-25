import styles from "./MediaInfo.module.css";
import Abc from "../../../Images/Abc.png";
import Instagram from "../../../Images/instagram.png";
import Facebook from "../../../Images/facebook.png";
import Twitter from "../../../Images/twitterremovebg.png";
import Copied from "../../../Images/copiedremovebg.png";

export const MediaInfo = () => (
  <div className={styles.MediaInfoCont}>
    <div className={styles.box}>
      <div className={styles.SocialIcons}>
        <li>
          <img src={Facebook} alt="network" />
        </li>
        <li>
          <img src={Twitter} alt="network" />
        </li>
        <li>
          <img src={Instagram} alt="network" />
        </li>
        <li>
          <img src={Copied} alt="network" />
        </li>
      </div>
      <div className={styles.details}>
        <li>
          <h4>Facts</h4>
        </li>
        <li>
          <h4>Status</h4>
          <p>Returning series</p>
        </li>
        <li>
          <h4>Network</h4>
          <img src={Abc} alt="network" />
        </li>
        <li>
          <h4>Type</h4>
          <p>Scripted</p>
        </li>
        <li>
          <h4>Original Language</h4>
          <p>English</p>
        </li>
      </div>
      <div className={styles.Keywords}>
        <li>
          <h4>Keywords</h4>
        </li>
        <li>nurse</li>
        <li>California</li>
        <li>Club</li>
        <li>Feast</li>
      </div>
    </div>
  </div>
);
