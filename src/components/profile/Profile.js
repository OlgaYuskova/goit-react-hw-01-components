import {UserCard, DescriptionCard, TextDescription, MainTextDescription, ListStats, ItemStats,} from './Profile.styled'

export const Profile = ({
    user: { username, tag, location, avatar, stats},
}) => {
    return (
<UserCard>
  <DescriptionCard>
    <img src={avatar} alt={username} width='100' height='100' />
    <MainTextDescription>{username}</MainTextDescription>
    <TextDescription>@{tag}</TextDescription>
    <TextDescription>{location}</TextDescription>
  </DescriptionCard>

  <ListStats>
    <ItemStats>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </ItemStats>
    <ItemStats>
      <span >Views</span>
      <span>{stats.views}</span>
    </ItemStats>
    <ItemStats>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </ItemStats>
  </ListStats>
</UserCard>
)
};