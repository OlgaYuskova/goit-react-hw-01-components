import { Friend, FriendList, FriendItem, FriendName, StasusOnlinee, StasusOfflinee} from './FriendList.styled'

const online = (
    <StasusOnlinee></StasusOnlinee>
)

const offline = (
    <StasusOfflinee></StasusOfflinee>
)

export const Friends = ({ friends }) => {
    return (
        <Friend>
            <FriendList>
            {friends.map((friend) => (
                <FriendItem key={friend.id}>
                    {friend.isOnline
                    ? online
                    : offline}
                    <img src={friend.avatar} alt={friend.name} width='100' height='100' />
                    <FriendName>{friend.name}</FriendName>
                </FriendItem>
            ))}
            </FriendList>
        </Friend>
    );
};