export function Statistics({statistics}) {
    return <section class="statistics">
        <h2 class="title">Upload stats</h2>
        
        <ul class="stat-list">
            <Item statistics={statistics} />
        </ul>
        </section>
}

export function Item({ statistics }) {
    return statistics.map(({ label, percentage}) => {
       return <li class="item">
            <span class="label">{label}: </span>
            <span class="percentage">{percentage}%</span>
            </li> 
    })
    
}