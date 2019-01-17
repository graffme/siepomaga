import React from 'react';
import classNames from 'classnames';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ className }) => (
  <div className={classNames(styles.progressBar, className)}>
    <span>Wsparło 845 osób</span>
    <div className={styles.progressOuter}>
      <div className={styles.progressInner}>
        <span>260 450 zł (60%)</span>
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
)

export default ProgressBar;
