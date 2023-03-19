export function StatisticsItem({ item }) {
    const { label, percentage } = item;
    return <div>
        <span class="label">{label}: </span>
        <span class="percentage">{percentage}%</span>
    </div>
        
}