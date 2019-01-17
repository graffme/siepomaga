import React from 'react';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem.js';
import StandardButton from '../StandardButton/StandardButton.js';

const List = () => (
  <section className={styles.list}>
    <h2 className="bottom20">Wsparli</h2>

    <ListItem  amount={100} className="tile bottom30" comment_text="Lorem ipsum dolor sit ament" paid_at="przed chwilą" />

    <ListItem  amount={100} className="tile bottom30" comment_text="Lorem ipsum dolor sit ament" paid_at="przed chwilą" />

    <StandardButton label="Pokaż więcej" onClick={() => console.log('Clicked')} />
  </section>
)

List.propTypes = {
  payments: PropTypes.object.isRequired,
}

export default List;
