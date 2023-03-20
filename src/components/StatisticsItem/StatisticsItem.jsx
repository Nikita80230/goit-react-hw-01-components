import css from './StatisticsItem.module.css'


export function StatisticsItem({ item }) {
    const { label, percentage } = item;
    return <div className={css.statisticsItem}>
        <span className="label">{label}: </span>
        <span className="percentage">{percentage}%</span>
    </div>
        
}