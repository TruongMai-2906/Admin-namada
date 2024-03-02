import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const searchKeyword = (e) => {
    const searchData = e.target.value.trim();
    navigate(`/validators/${searchData}`)
  }

  const debounceSearch = useRef(debounce((nextValue) => searchKeyword(nextValue), 500)).current;

  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <div className={styles["title-container"]}>
          <div className={styles["title"]}>shielded-expedition.88f17d1d14</div>
          <div className={styles["description"]}>https://namada-rpc.validatorvn.com</div>
        </div>
        <form className={styles["search-form"]}>
          <input type="text" id="search" name="search" className={styles["search"]} onChange={(e) => debounceSearch(e)} />
          <SearchIcon className={styles["search-icon"]} />
        </form>
      </div>
    </div>
  );
};

export default Header;