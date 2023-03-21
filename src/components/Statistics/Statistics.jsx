import { StatisticsItem } from "../StatisticsItem/StatisticsItem"
import css from './Statistics.module.css'

import PropTypes from 'prop-types'; 

export function Statistics({ statistics, title }) {
    return title && <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        
        <ul className={css.statList}>
            {statistics.map((item) => (
                <li key = {item.id}>
                    <StatisticsItem item={item} />
                </li>
            ))}
        </ul>
        </section>
}


Statistics.propTypes = {
  statistics: PropTypes.array,
  title: PropTypes.string,
};