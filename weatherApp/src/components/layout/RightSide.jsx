import Item from "../Items/Item";
import styles from "./rightSide.module.css";

const RightSide = () => {
    return (
        <div className={styles.rightSide}>
            <div className={styles.infos}>
                <h2>Today</h2>
                <h2 className={styles.tomorrow}>Tomorrow</h2>
            </div>
            <div className={styles.items}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
};

export default RightSide;
