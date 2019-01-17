import React from 'react';
import '../../styles/styles.scss';
import styles from './Header.module.scss';
import IconButton from '../IconButton/IconButton.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';

const Header = ({ title }) => (
  <header className={styles.header}>
    <div className="container">
      <div className="row">

        <div className="col-9">
          <h1>{title}</h1>
        </div>

        <div className="col-3">
          <IconButton onClick={() => console.log('Thank you!')} className="bottom20"/>
        </div>

      </div>
      <div className="row">

      <ProgressBar />

      </div>
    </div>
  </header>
)

export default Header;
