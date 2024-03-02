import styles from "./ValidatorDetail.module.scss";

const ValidatorDetail = (props) => {
  const { data: validationDetail } = props;
  
  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Validator Details</div>
        <div className={styles["line"]}></div>
        <div className={styles["content"]}><span>Address: </span><br />{validationDetail?.address}</div>
        <div className={styles["content"]}><span>Voting Power: </span><br />{validationDetail?.voting_power}</div>
        <div className={styles["content"]}><span>Moniker: </span><br />{validationDetail?.moniker}</div>
        <div className={styles["content"]}><span>Tendermint Address: </span><br />{validationDetail?.operator_address}</div>
      </div>
    </div>
  );
};

export default ValidatorDetail;