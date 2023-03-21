import { Friend } from "../Friend/Friend"

import PropTypes from 'prop-types'; 

export function FriendList({ friends }) {
    return <ul className="friend-list">
        {friends.map((friend) => {
            return <li key={friend.id}>
                <Friend friend={friend}/>
            </li>
        })}
    </ul>
}

FriendList.propTypes = {
  friends: PropTypes.array,
};