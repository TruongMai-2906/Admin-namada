import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = () => {
    const searchData = searchRef.current.value.trim();
    navigate(`/validators/${searchData}`)
  }

  return (
    <div className={styles["root"]}>
      <div className={styles["container"]}>
        <div className={styles["title-container"]}>
          <div className={styles["title"]}>shielded-expedition.88f17d1d14</div>
          <div className={styles["description"]}>https://namada-rpc.validatorvn.com</div>
        </div>
        <form className={styles["search-form"]}>
          <input ref={searchRef} type="text" id="search" name="search" className={styles["search"]} />
          <SearchIcon className={styles["search-icon"]} onClick={() => handleSearch()} />
        </form>
      </div>
    </div>
  );
};

export default Header;