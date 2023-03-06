import {UserItem} from 'components/UserItem/UserItem';
import {List} from './UserListStyled';

export default function UserList({ userData, updateUser}) {

    return (
            <List>
                {userData.map(( userData ) => (
                    <UserItem key={userData.id} userData={userData} updateUser={updateUser}>
                    </UserItem>
                ))}
            
            </List>
    );
}
