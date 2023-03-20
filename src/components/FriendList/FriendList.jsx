import { Friend } from "../Friend/Friend"

export function FriendList({ friends }) {
    return <ul className="friend-list">
        {friends.map((friend) => {
            return <li key={friend.id}>
                <Friend friend={friend}/>
            </li>
        })}
    </ul>
}