import hLogo from "/h.svg";

import styles from "./styles.module.css";

export default function App() {
  return (
    <section className={styles.container}>
      <img
        width={150}
        height={150}
        src={hLogo}
        alt="Hizia logo"
        draggable={false}
      />
      <h1>
        Hello, World
      </h1>
    </section>
  );
}
