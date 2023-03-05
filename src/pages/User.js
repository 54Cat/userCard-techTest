import UserList from 'components/UserList/UserList';

export default function Contact() {
    const userData = [
        {
            id: 101,
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg",
            tweets: 777,
            followers: 100500
        }
    ];

    return (  
        <UserList userData={userData} />
    ); 
}
