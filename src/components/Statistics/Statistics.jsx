import { StatisticsItem } from "../StatisticsItem/StatisticsItem"

export function Statistics({ statistics }) {
    return <section className="statistics">
        <h2 className="title">Upload stats</h2>
        
        <ul className="stat-list">
            {statistics.map((item) => (
                <li key = {item.id}>
                    <StatisticsItem item={item} />
                </li>
            ))}
        </ul>
        </section>
}

