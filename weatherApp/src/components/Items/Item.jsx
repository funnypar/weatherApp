import styles from "./item.module.css";

const Item = () => {
    return (
        <div className={styles.item}>
            <p>Wind</p>
            <h6>6 km/h</h6>
            <p>East</p>
        </div>
    );
};

export default Item;
