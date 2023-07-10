import React from 'react'
import PropTypes from 'prop-types';
import styles from './CardComp.module.css'

export class CardComp extends React.Component {
  constructor() {
    super();
    this.state = {
      viewsCount: 0,
      reviewsCount: 0,
      commentsCount: 0
    };
  }

  render() {
    const {upname, imageSrc, imageAlt, name, desc} = this.props;
    const minusViews = ()=>{
      const newCount = this.state.viewsCount <=0 ? 0 : this.state.viewsCount-1;
      this.setState({
        viewsCount: newCount
      })
    }

    const minusReviews = ()=>{
      const newCount = this.state.reviewsCount <=0 ? 0 : this.state.reviewsCount-1;
      this.setState({
        reviewsCount: newCount
      })
    }

    const minusComments = ()=>{
      const newCount = this.state.commentsCount <=0 ? 0 : this.state.commentsCount-1;
      this.setState({
        commentsCount: newCount
      })
    }
    
    const plusViews = ()=>{
      this.setState({
        viewsCount: this.state.viewsCount+1
      })
    }
    const plusReviews = ()=>{
      this.setState({
        reviewsCount:this.state.reviewsCount+1
      })
    }

    const plusComments = ()=>{
      this.setState({
        commentsCount:this.state.commentsCount+1
      })
    }
    return (
      <>
             <div className={styles["wrapper"]}>
             <div className={`${styles["clash-card"]} ${styles["barbarian"]}`}>
               <div className={`${styles["clash-card__image"]} ${styles["clash-card__image--barbarian"]}`}>
                 <img src={this.props.imageSrc} alt={this.props.imageAlt} />
               </div>
               <div className={`${styles["clash-card__level"]} ${styles["clash-card__level--barbarian"]}`}>{this.props.upname}</div>
               <div className={styles["clash-card__unit-name"]}>{this.props.name}</div>
               <div className={styles["clash-card__unit-description"]}>
                 {this.props.desc}
               </div>
               <div className={`${styles["clash-card__unit-stats"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clearfix"]}`}>
                 <div className={styles["one-third"]}>
                   <div className={styles["stat"]}>
                   <a onClick={minusViews} role="button" className='text-decoration-none me-2 text-dark'>-</a>{this.state.viewsCount}<a role="button" onClick={plusViews} className="text-decoration-none ms-2 text-dark">+</a>
                   </div>
                   <div className={styles["stat-value"]}>Views</div>
                 </div>
                 <div className={styles["one-third"]}>
                   <div className={styles["stat"]}>
                   <a onClick={minusReviews} role="button" className='text-decoration-none me-2 text-dark'>-</a>{this.state.reviewsCount}<a onClick={plusReviews} className="text-decoration-none ms-2 text-dark" role="button">+</a>
                    </div>
                   <div className={styles["stat-value"]}>Reviews</div>
                 </div>
                 <div className={`${styles["one-third"]} ${styles["no-border"]}`}>
                   <div className={styles["stat"]}>
                   <a onClick={minusComments} role="button" className='text-decoration-none me-2 text-dark'>-</a>{this.state.commentsCount}<a onClick={plusComments} className="text-decoration-none ms-2 text-dark" role="button">+</a>
                    </div>
                   <div className={styles["stat-value"]}>Comments</div>
                 </div>
               </div>
             </div>
             </div>
         </>
    );
  }

}

// export function CardComp(props){
//     return(
//         <>
//             <div className={styles["wrapper"]}>
//             <div className={`${styles["clash-card"]} ${styles["barbarian"]}`}>
//               <div className={`${styles["clash-card__image"]} ${styles["clash-card__image--barbarian"]}`}>
//                 <img src={props.imageSrc} alt={props.imageAlt} />
//               </div>
//               <div className={`${styles["clash-card__level"]} ${styles["clash-card__level--barbarian"]}`}>{props.upname}</div>
//               <div className={styles["clash-card__unit-name"]}>{props.name}</div>
//               <div className={styles["clash-card__unit-description"]}>
//                 {props.desc}
//               </div>
//               <div className={`${styles["clash-card__unit-stats"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clash-card__unit-stats--barbarian"]} ${styles["clearfix"]}`}>
//                 <div className={styles["one-third"]}>
//                   <div className={styles["stat"]}>{props.viewsCount}</div>
//                   <div className={styles["stat-value"]}>Views</div>
//                 </div>
//                 <div className={styles["one-third"]}>
//                   <div className={styles["stat"]}>{props.reviewsCount}</div>
//                   <div className={styles["stat-value"]}>Reviews</div>
//                 </div>
//                 <div className={`${styles["one-third"]} ${styles["no-border"]}`}>
//                   <div className={styles["stat"]}>{props.commentsCount}</div>
//                   <div className={styles["stat-value"]}>Comments</div>
//                 </div>
//               </div>
//             </div>
//             </div>
//         </>
//     );
// }

// CardComp.propTypes={
//     imageSrc: PropTypes.string,
//     imageAlt: PropTypes.string,
//     upname: PropTypes.string,
//     name: PropTypes.string,
//     desc: PropTypes.string,
//     viewsCount: PropTypes.number,
//     reviewsCount: PropTypes.number,
//     commentsCount: PropTypes.number
// }