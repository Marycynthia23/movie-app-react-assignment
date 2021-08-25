import styles from "./BodyLayout.module.css";
import { SideBar } from "../SideBar";
import { Movies } from "../Movies";

export const BodyLayout = (props) => (
  <div className={styles.Layout}>
    <SideBar />
    <Movies props={props.props} />
  </div>
);
