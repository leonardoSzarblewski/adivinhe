import { Header } from "./components/Header";
import styles from "./app.module.css";

export default function App() {
  function hendleRestartGame() {
    alert("Reiniciar o jogo");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={hendleRestartGame} />
      </main>
    </div>
  );
}
