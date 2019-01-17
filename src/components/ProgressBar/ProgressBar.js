import React from 'react';
import classNames from 'classnames';
import styles from './ProgressBar.module.scss';
import { AppConsumer } from '../../AppContext.js';

const ProgressBar = ({ className }) => {
  return(
    <AppConsumer>
     {context =>
       <div className={classNames(styles.progressBar, className)}>
         <div className={styles.progressOuter}>
           <div className={styles.progressInner}>
             <span>{context.funds_current} zł ({context.fund_percentage}%)</span>
             <div className={styles.progressPercent}>
               <div className={styles.bubbleAnimation}>
                 <div className={classNames(styles.bubble, styles.x1)}></div>
                 <div className={classNames(styles.bubble, styles.x2)}></div>
                 <div className={classNames(styles.bubble, styles.x3)}></div>
                 <div className={classNames(styles.bubble, styles.x4)}></div>
                 <div className={classNames(styles.bubble, styles.x5)}></div>
                 <div className={classNames(styles.bubble, styles.x6)}></div>
               </div>
             </div>
           </div>
         </div>
       </div>
     }
    </AppConsumer>
  )
}

export default ProgressBar;
