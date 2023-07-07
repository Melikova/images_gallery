import { ImageComp } from '../ImageComp';
import styles from './HomeComp.module.css';
const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));

export function HomeComp() {
  return (
    <div className={styles["grid"]}>
        {imageList.map((image, index)=>{
            return(
                <div className={styles[`img-${index+1}`]}><a href="#"><ImageComp image={image} /></a></div>
            );
        })}
    </div>
  );
}