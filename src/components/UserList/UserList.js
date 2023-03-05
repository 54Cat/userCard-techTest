import {UserItem} from 'components/UserItem/UserItem';
import {List} from './UserListStyled';

export default function UserList({ userData }) {

    return (
            <List>
                {userData.map(({ id, avatar, tweets, followers }) => (
                    <UserItem key={id} avatar={avatar} tweets={tweets} followers={followers}>
                    </UserItem>
                ))}
            
            </List>
    );
}
