export function Friend({friend}) {
    const { avatar, name, isOnline } = friend;
    return <div>
        <span class="status">{isOnline ? "online" : "offline"}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
    </div>
    
}

