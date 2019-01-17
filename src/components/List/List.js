import React from 'react';
import '../../styles/styles.scss';
import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem.js';
import StandardButton from '../StandardButton/StandardButton.js';

const List = (props) => {
  const payments = props.payments;
  const itemsList = payments.map((payment) =>
    <ListItem  amount={payment.amount} className="tile bottom30" comment_text={payment.comment_text} paid_at={payment.paid_at} signature={payment.signature} />
  );

  return (
    <section className={styles.list}>
      <h2 className="bottom20">Wsparli</h2>
      {itemsList}
      <StandardButton label="Pokaż więcej" onClick={() => console.log('Clicked')} />
    </section>
  );
}

export default List;
