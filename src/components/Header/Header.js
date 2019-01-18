import React from 'react';
import '../../styles/styles.scss';
import styles from './Header.module.scss';
import IconButton from '../IconButton/IconButton.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import HeartAnimation from '../Animation/HeartAnimation.js';
import Fade from 'react-reveal/Fade';

const Header = ({ title, payments_total_count }) => (
  <header className={styles.header}>
    <div className={styles.heartsAnimation}>
      <HeartAnimation />
    </div>

    <div className="container">
      <Fade bottom>
        <div className="row align-items-center bottom20">
          <div className="col-lg-9">
            <h1>{title}</h1>
          </div>
          <div className="col-lg-3">
            <IconButton onClick={() => console.log('Thank you!')} />
          </div>
        </div>
        <div className="row justify-content-center">
          <span className={styles.totalPayments}>Wsparło {payments_total_count} osób</span>
          <ProgressBar />
        </div>
      </Fade>
    </div>
  </header>
)

export default Header;
