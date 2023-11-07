import {Friend} from './FriendList.styled'
import {FriendListItems} from '../friendListItem/friendListItem'

export const Friends = ({ friends }) => {
    return (
        <Friend>
            <FriendListItems friends={friends}/>
        </Friend>
    );
};