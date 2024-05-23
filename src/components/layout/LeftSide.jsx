import City from "../city/City";
import SearchBar from "../searchBar/SearchBar";
import styles from "./leftSide.module.css";

const LeftSide = () => {
    return (
        <div className={styles.leftSide}>
            <SearchBar />
            <City />
        </div>
    );
};

export default LeftSide;
