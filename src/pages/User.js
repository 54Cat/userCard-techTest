import UserList from 'components/UserList/UserList';
import usersData from 'data/usersData.json';
import { useEffect, useState } from 'react';

export default function UsersCollection() {
    const [users, setUsersData] = useState(JSON.parse(localStorage.getItem("usersData")) ?? usersData);

    useEffect(() => {
        localStorage.setItem("usersData", JSON.stringify(users));
    }, [users]);

    const updateUser = (id, isSubscribe, followers) => {
        setUsersData((prevState) =>
            prevState.map((user) =>
                user.id === id ? { ...user, isSubscribe, followers } : user
            )
        );
    };
    
    return (  
        <UserList userData={users} updateUser={updateUser} />
    ); 
}
