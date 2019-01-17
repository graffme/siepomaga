import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './StandardButton.module.scss';

const StandardButton = ({ onClick, className, label }) => (
  <div onClick={onClick} className={classNames(styles.standardButton, className)}>
    {label}
  </div>
)

StandardButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  label: PropTypes.string,
}

StandardButton.defaultProps = {
  className: '',
  label: 'Więcej',
}

export default StandardButton;
