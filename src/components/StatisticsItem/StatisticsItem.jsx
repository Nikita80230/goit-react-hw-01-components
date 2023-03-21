import css from './StatisticsItem.module.css'

import PropTypes from 'prop-types'; 


export function StatisticsItem({ item }) {
    const { label, percentage } = item;
    return <div className={css.statisticsItem}>
        <span className="label">{label}: </span>
        <span className="percentage">{percentage}%</span>
    </div>
        
}

StatisticsItem.propTypes = {
  item: PropTypes.object,
};