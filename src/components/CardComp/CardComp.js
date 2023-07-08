import styles from './CardComp.module.css'

export function CardComp(){
    return(
        <>
            <div className={styles["wrapper"]}>
            <div className={`${styles["clash-card"]} ${styles["barbarian"]}`}>
              <div className={`${styles["clash-card__image"]} ${styles["clash-card__image--barbarian"]}`}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
              </div>
              <div className={`${styles["clash-card__level"]} ${styles["clash-card__level--barbarian"]}`}>Level 4</div>
              <div className={styles["clash-card__unit-name"]}>The Barbarian</div>
              <div className={styles["clash-card__unit-description"]}>
                The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
              </div>
              <div className={`${styles["clash-card__unit-stats"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clearfix"]}`}>
                <div className={styles["one-third"]}>
                  <div className={styles["stat"]}>20<sup>S</sup></div>
                  <div className={styles["stat-value"]}>Training</div>
                </div>
                <div className={styles["one-third"]}>
                  <div className={styles["stat"]}>16</div>
                  <div className={styles["stat-value"]}>Speed</div>
                </div>
                <div className={`${styles["one-third"]} ${styles["no-border"]}`}>
                  <div className={styles["stat"]}>150</div>
                  <div className={styles["stat-value"]}>Cost</div>
                </div>
              </div>
            </div>
            </div>
        </>
    );
}