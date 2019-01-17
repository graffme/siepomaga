import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';
import icon from '../../assets/img/heart.png';

const IconButton = ({ onClick, className, label }) => (
  <div onClick={onClick} className={classNames(styles.iconButton, className)}>
    <div className={styles.buttonWrapper}>
      <img alt="icon" src={icon} />
      <span>{label}</span>
    </div>
  </div>
)

IconButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  label: PropTypes.string,
}

IconButton.defaultProps = {
  className: '',
  label: 'Wspieraj',
}

export default IconButton;
