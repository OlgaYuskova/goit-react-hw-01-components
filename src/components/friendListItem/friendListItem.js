import { FriendListItem, FriendName } from './FriendListItem.styled';

export const FriendListItems = ({ friends }) => {
  return friends.map((friend) => (
    <FriendListItem key={friend.id}>
      <span style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}></span>
      <img src={friend.avatar} alt={friend.name} width='100' height='100' />
      <FriendName>{friend.name}</FriendName>
    </FriendListItem>
  ));
};