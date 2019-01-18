import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import avatar from '../../assets/img/face.png';
import { formatDate } from './helpers.js';
import Fade from 'react-reveal/Fade';

const ListItem = ({ amount, className, comment_text, paid_at, photo_url, signature }) => (
  <Fade bottom>
  <div className={classNames(styles.listItem, className)}>
    <div className={styles.avatar}>
      <img alt="avatar" src={photo_url} />
    </div>

    <div className={styles.itemContent}>
      <h3>{signature}</h3>
      <span>{formatDate(paid_at)}</span>
      <p>{comment_text}</p>
    </div>

    <div className={styles.itemFunds}>
      <span>{amount} zł</span>
    </div>
  </div>
  </Fade>
)

ListItem.propTypes = {
  signature: PropTypes.string,
  paid_at: PropTypes.string.isRequired,
  comment_text: PropTypes.string,
  photo_url: PropTypes.string,
  amount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

ListItem.defaultProps = {
  signature: 'Anonimowy Pomagacz',
  comment_text: '',
  photo_url: avatar,
  amount: 'X',
}

export default ListItem;
