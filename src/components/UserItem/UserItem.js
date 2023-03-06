import { Item, AvatarThumb, Avatar, InfoList, InfoItem, Btn } from './UserItemStyled';
import { toDivide } from '../Utils/divide';
import { useEffect, useState } from 'react';

export const UserItem = ({ userData, updateUser }) => {
    const { id, tweets, followers, avatar, isSubscribe } = userData;
    
    const [followerCounter, setFollowerCounter] = useState(followers)
    const [isFollow, setFollow] = useState(isSubscribe)
        
    const handleToggle = () => {
        setFollow(!isFollow)

        if (!isFollow) {
            setFollowerCounter(state => state + 1)
        }
        else {
            setFollowerCounter(state => state - 1)
        }
    }

    useEffect(() => {
        updateUser(id, isFollow, followerCounter)
    }, [isFollow, followerCounter])
    
    return (
        <Item>
            <AvatarThumb>
                <Avatar src={avatar}></Avatar>
            </AvatarThumb>
            
            <InfoList>
                <InfoItem>{tweets} Tweets</InfoItem>
                <InfoItem>{toDivide(followerCounter)} Followers</InfoItem>
            </InfoList>

            <Btn type='button' className={isFollow ? 'active' : ''} onClick={handleToggle}>{isFollow ? "Follow" : "Following"}</Btn>
        </Item>
    );
};
