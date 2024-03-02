import React from 'react';
import styles from "./Header.module.scss";

const Header = () => {

  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <div className={styles["title"]}>shielded-expedition.88f17d1d14</div>
        <div className={styles["description"]}>https://namada-rpc.validatorvn.com</div>
      </div>
    </div>
  );
};

export default Header;