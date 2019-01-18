import React from 'react';
import classNames from 'classnames';
import styles from './BubbleAnimation.module.scss';

const BubbleAnimation = () => (
  <div className={styles.bubbleAnimation}>
    <div className={classNames(styles.bubble, styles.x1)}></div>
    <div className={classNames(styles.bubble, styles.x2)}></div>
    <div className={classNames(styles.bubble, styles.x3)}></div>
    <div className={classNames(styles.bubble, styles.x4)}></div>
    <div className={classNames(styles.bubble, styles.x5)}></div>
    <div className={classNames(styles.bubble, styles.x6)}></div>
  </div>
)

export default BubbleAnimation;
