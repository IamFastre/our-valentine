import heart from "/demon-heart.svg";
import hLogo from "/h.svg";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function App() {
  const [on, setOn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!on)
        setOn(true);
    }, 7500);
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.swirl} />
        <img
          src={heart}
          alt="Demon Heart"
          className={styles.logo}
          style={{ animationName: on ? styles.beat : undefined }}
          onClick={() => setOn(o => !o)}
          draggable={false}
        />
        <h1 style={{ animationName: on ? styles.swipe : undefined }}>
          Good evening, Lovely!
        </h1>
        <p>
          I'm sorry distance is a big thing between us.
          <br/>
          I wish it wasn't like this, wouldn't it be so much better if you were just next door?
          <br/>
          You can't begin to fathom how much I love you, <strong>Sweets</strong>. I might be at a loss of words here,
          since it's incredibly hard to describe these things. But I know we both know how immense our
          feelings are, I wish I could hug you as I hand you this red envelope, waiting for you to read
          it as we both smile and go for a deep hug; the type of hug that might break a neck or two!
          <br/>
          <strong>Hizia</strong>, you're my love forever and I hope we get there sooner than later, can't wait for us to
          share the same house, same bed, same sleep schedule ('cause fuck!), and–of course–same last name.
        </p>
        <div className={`${styles.swirl} ${styles.other}`} />
      </section>
      <div className={styles.footer}>
        <span>
          Power by <em>My Love For Hizia</em>
        </span>
        <img
          src={hLogo}
          alt="Hizia Logo"
          draggable={false}
      />
      </div>
    </>
  );
}
