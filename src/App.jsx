import styles from "./app.module.css";
import LeftSide from "./components/layout/LeftSide";
import RightSide from "./components/layout/RightSide";
function App() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.app}>
                <LeftSide />
                <RightSide />
            </main>
        </div>
    );
}

export default App;
