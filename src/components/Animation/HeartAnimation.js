import React from 'react';
import classNames from 'classnames';
import styles from './HeartAnimation.module.scss';

const HeartAnimation = () => (
  <div className={styles.heartsAnimation}>
    <div className={classNames(styles.heart, styles.x1)}></div>
    <div className={classNames(styles.heart, styles.x2)}></div>
    <div className={classNames(styles.heart, styles.x3)}></div>
    <div className={classNames(styles.heart, styles.x4)}></div>
    <div className={classNames(styles.heart, styles.x5)}></div>
    <div className={classNames(styles.heart, styles.x6)}></div>
    <div className={classNames(styles.heart, styles.x7)}></div>
    <div className={classNames(styles.heart, styles.x8)}></div>
    <div className={classNames(styles.heart, styles.x9)}></div>
    <div className={classNames(styles.heart, styles.x10)}></div>
  </div>
)

export default HeartAnimation;
