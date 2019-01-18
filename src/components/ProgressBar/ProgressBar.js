import React from 'react';
import classNames from 'classnames';
import styles from './ProgressBar.module.scss';
import BubbleAnimation from '../Animation/BubbleAnimation.js';
import { AppConsumer } from '../../AppContext.js';

const ProgressBar = ({ className }) => {
  return(
    <AppConsumer>
     {context =>
       <div className={classNames(styles.progressBar, className)}>
         <div className={styles.progressOuter}>
           <div className={styles.progressInner}>
             <span>{context.funds_current} zł ({context.funds_percentage}%)</span>
             <div className={styles.progressPercent}>
               <BubbleAnimation />
             </div>
           </div>
         </div>
       </div>
     }
    </AppConsumer>
  )
}

export default ProgressBar;
