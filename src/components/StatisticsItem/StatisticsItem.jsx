export function StatisticsItem({ item }) {
    const { label, percentage } = item;
    return <div>
        <span className="label">{label}: </span>
        <span className="percentage">{percentage}%</span>
    </div>
        
}