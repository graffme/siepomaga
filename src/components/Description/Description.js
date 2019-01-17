import React from 'react';
import classNames from 'classnames';
import '../../styles/styles.scss';
import styles from './Description.module.scss';

const description = "<p>Przed nami 27. finał Wielkiej Orkiestry Świątecznej Pomocy. W tym roku środki zbierane są na zakup nowoczesnego sprzętu medycznego dla specjalistycznych szpitali dziecięcych.</p>\n<p>Gazeta Wyborcza włącza się w pomoc. Całkowity dochód z puszki przekazany zostanie na Wielką Orkiestrę Świątecznej Pomocy. </p>\n<p><img src=\"https://siepomagaimg.pl/uploads/attached_image/photo/173397/content_wo%C5%9Bp.jpg\" alt=\"Gazeta Wyborcza\"></p>\n<p> </p>"

const Description = () => (
  <section className={classNames(styles.descriptionTile, "tile bottom30")}>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </section>
)

export default Description;
