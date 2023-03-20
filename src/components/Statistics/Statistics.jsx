import { StatisticsItem } from "../StatisticsItem/StatisticsItem"
import css from './Statistics.module.css'

export function Statistics({ statistics }) {
    return <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        
        <ul className={css.statList}>
            {statistics.map((item) => (
                <li key = {item.id}>
                    <StatisticsItem item={item} />
                </li>
            ))}
        </ul>
        </section>
}

