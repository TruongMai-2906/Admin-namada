import { fetchLatestSignatures } from "@/apis/store_api.ts";
import { Tooltip } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./SignedBlock.module.scss";
import { Link } from "react-router-dom";

const SignedBlock = (props) => {
  const { data: validationDetail } = props;

  const [data, setData] = useState([]);

  const fetchData = (validationDetail) => {
    fetchLatestSignatures(validationDetail?.address).then(res => setData(res));
  }

  useEffect(() => {
    let timer = undefined;
    if (validationDetail) {
      fetchData(validationDetail);
      timer = setInterval(() => fetchData(validationDetail), [4000]);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, [validationDetail]);
  
  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <div className={styles["title"]}>100 Signed Block</div>
        <div className={styles["line"]}></div>
        <div className={styles["block-container"]}>
          <div className={styles["block-list"]}>
            {
              data.map((item, index) => <Tooltip title={<div className={styles["tooltip"]}>Block Number: {item.block_number}</div>}>
                <Link key={`block-${index}`} className={classNames(styles["block"], item.sign_status ? styles["block--signed"] : "")} to={"/"}></Link>
              </Tooltip>)
            }
          </div>
          <div className={styles["info"]}>
            <div className={styles["info-item"]}><div className={classNames(styles["info-item-block"], styles["info-item-block--signed"])}></div> Signed Block</div>
            <div className={styles["info-item"]}><div className={styles["info-item-block"]}></div> Missed Block</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedBlock;