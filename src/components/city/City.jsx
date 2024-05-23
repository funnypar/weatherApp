import styles from "./city.module.css";

const City = () => {
    return (
        <div className={styles.wrapper}>
            <img
                src="/public/icons/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg"
                alt="cloudy"
                className={styles.img}
            />

            <div className={styles.info}>
                <h2>
                    <span className={styles.span}>31</span>&deg;C
                </h2>
                <p className={styles.weather}>Mostly Cloudy</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.info}>
                <p className={styles.date}>21-July-2023</p>
                <h4 className={styles.important}>Friday,12.44 PM</h4>
                <p className={styles.important}>Day</p>
            </div>
            <h1>Tehran</h1>
        </div>
    );
};

export default City;
