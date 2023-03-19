import { Friend } from "./Friend"

export function FriendList({ friends }) {
    return <ul class="friend-list">
        {friends.map((friend) => {
            return <li key={friend.id}>
                <Friend friend={friend}/>
            </li>
        })}
    </ul>
}