import React from 'react';
import classNames from 'classnames';
import '../../styles/styles.scss';
import styles from './Description.module.scss';

const Description = ({ description }) => (
  <section className={classNames(styles.descriptionTile, "tile bottom30")}>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </section>
)

export default Description;
