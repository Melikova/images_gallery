import PropTypes from 'prop-types';
import styles from './CardComp.module.css'

export function CardComp(props){
    return(
        <>
            <div className={styles["wrapper"]}>
            <div className={`${styles["clash-card"]} ${styles["barbarian"]}`}>
              <div className={`${styles["clash-card__image"]} ${styles["clash-card__image--barbarian"]}`}>
                <img src={props.imageSrc} alt={props.imageAlt} />
              </div>
              <div className={`${styles["clash-card__level"]} ${styles["clash-card__level--barbarian"]}`}>{props.upname}</div>
              <div className={styles["clash-card__unit-name"]}>{props.name}</div>
              <div className={styles["clash-card__unit-description"]}>
                {props.desc}
              </div>
              <div className={`${styles["clash-card__unit-stats"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clearfix"]}`}>
                <div className={styles["one-third"]}>
                  <div className={styles["stat"]}>{props.viewsCount}</div>
                  <div className={styles["stat-value"]}>Views</div>
                </div>
                <div className={styles["one-third"]}>
                  <div className={styles["stat"]}>{props.reviewsCount}</div>
                  <div className={styles["stat-value"]}>Reviews</div>
                </div>
                <div className={`${styles["one-third"]} ${styles["no-border"]}`}>
                  <div className={styles["stat"]}>{props.commentsCount}</div>
                  <div className={styles["stat-value"]}>Comments</div>
                </div>
              </div>
            </div>
            </div>
        </>
    );
}

CardComp.propTypes={
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    upname: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    viewsCount: PropTypes.number,
    reviewsCount: PropTypes.number,
    commentsCount: PropTypes.number
}