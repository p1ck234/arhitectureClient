import React from "react";
import styles from "./Main.module.css";
import Image from "next/image";

const Main = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.main__title}>
          <Image className={styles.img} src="svg/Architecture.svg" width={1800} height={170} alt="" />
        </div>
        <div className={styles.main__desc}>
          <div>
            <Image
              className={styles.main__img}
              src="/img/3d2.png"
              width={1058}
              height={824}
              alt=""
            />
          </div>
          <div className={styles.main__right}>
            <p className={styles.right__desc}>
              We, as a brand, turn your dreams into fantastique interiors and
              architectural designs. Our projects inspire the pursuit of your
              great aspirations. We create the alchemy of luxury and the
              enjoyment of our clientèle
            </p>
            <button className={styles.right__button}>All project</button>
          </div>
        </div>
      </main>
      <div className={styles.main__line}></div>
    </div>
  );
};

export default Main;
