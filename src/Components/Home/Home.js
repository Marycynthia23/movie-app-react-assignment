import styles from "./Home.module.css";
import logo from "../../Images/logggo.png";
import SearchIcon from "../../Images/icon.png";
import { Title } from "../Title";
import { BodyLayout } from "../BodyLayout";

export const Home = (props) => {
  return (
    <div>
      <div className={styles.NavbarCont}>
        <div className={styles.leftNav}>
          <img className={styles.logoImg} src={logo} alt="logo" />
          <div className={styles.dropdown}>
            <div className={styles.dropbtn}>Movies</div>
            <div className={styles.dropbtn}>TV Shows</div>
            <div className={styles.dropbtn}>People</div>
            <div className={styles.dropbtn}>More</div>
          </div>
        </div>
        <div className={styles.rytNav}>
          <ul className={styles.ulRyt}>
            <li className={styles.add}> +</li>
            <li>
              <div className={styles.borderEn}>EN</div>
            </li>
            <li>Login</li>
            <li>Join TMBd</li>
            <li>
              <img className={styles.SearchIcon} src={SearchIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <Title />
      <BodyLayout props={props} />
    </div>
  );
};
