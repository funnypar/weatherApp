import { CgSearch } from "react-icons/cg";
import styles from "./searchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.wrapper}>
            <input
                type="search"
                placeholder="Tehran"
                className={styles.search}
            />
            <p className={styles.btn}>
                <CgSearch className={styles.icon} />
            </p>
        </div>
    );
};

export default SearchBar;
