import React, { Component } from 'react';
import '../../styles/styles.scss';
import styles from './List.module.scss';
import ListItem from '../ListItem/ListItem.js';
import StandardButton from '../StandardButton/StandardButton.js';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 5,
    };
  }

  loadMore = () => {
    this.setState((prev) => {
      return {visible: prev.visible + 5};
    });
  }

  render() {
    const { payments } = this.props;
    const { visible } = this.state;
    const itemsList = payments.slice(0, visible).map((payment) =>
      <ListItem key={payment.id} amount={payment.amount} className="tile bottom30" comment_text={payment.comment_text} paid_at={payment.paid_at} signature={payment.signature} />
    );

    return (
      <section className={styles.list}>
        <h2 className="bottom20">Wsparli</h2>
        {itemsList}

        {visible < 20 &&
          <StandardButton label="Pokaż więcej" onClick={() => this.loadMore()} />
        }
      </section>
    );
  }
}

export default List;
