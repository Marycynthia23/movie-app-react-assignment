import styles from "./SideBar.module.css";

export const SideBar = () => (
  <div className={styles.SideBar}>
    <div className={styles.SideBarBlock}>
      <div>
        Sort
        <span>
          <b>&gt;</b>{" "}
        </span>{" "}
      </div>
      <div>
        Filter
        <span>
          {" "}
          <b>&gt;</b>
        </span>
      </div>
      <div>
        Where to Watch
        <span>
          {" "}
          <b>&gt;</b>
        </span>{" "}
      </div>
      <input
        onChange={() => ""}
        type="text"
        id="Search"
        value="Search"
        placeholder="Search"
      />
    </div>
  </div>
);
