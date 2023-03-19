import { StatisticsItem } from "./StatisticsItem"

export function Statistics({ statistics }) {
    return <section class="statistics">
        <h2 class="title">Upload stats</h2>
        
        <ul class="stat-list">
            {statistics.map((item) => (
                <li key = {item.id}>
                    <StatisticsItem item={item} />
                </li>
            ))}
        </ul>
        </section>
}

