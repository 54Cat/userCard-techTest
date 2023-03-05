import { Item, AvatarThumb, Avatar, InfoList, InfoItem, Btn } from './UserItemStyled';
import { toDivide } from '../Utils/divide';
import { useEffect, useState } from 'react';

export const UserItem = ({ avatar, tweets, followers }) => {

    const [followerCounter, setFollowerCounter] = useState(() => {
        return JSON.parse(window.localStorage.getItem('followers')) ?? followers
    })
    const [activeBtn, setActiveBtn] = useState((() => {
        return JSON.parse(window.localStorage.getItem('activeBtn')) ?? false
    }))

    useEffect(() => {
      localStorage.setItem('followers', followerCounter); 
      localStorage.setItem('activeBtn', activeBtn); 
    }, [followerCounter, activeBtn])
        
    const toggle = () => {
        setActiveBtn(!activeBtn)

        if (!activeBtn) {
            setFollowerCounter(followerCounter + 1)
        }
        else {
            setFollowerCounter(followerCounter - 1)
        }
    }

    return (
        <Item>
            {/* <BgImg>rfhtrjtrjrtyj</BgImg> */}
            <AvatarThumb>
                <Avatar src={avatar}></Avatar>
            </AvatarThumb>
            
            <InfoList>
                <InfoItem>{tweets} Tweets</InfoItem>
                <InfoItem>{toDivide(followerCounter)} Followers</InfoItem>
            </InfoList>

            <Btn className={activeBtn ? 'active' : ''} onClick={toggle}>{activeBtn ? "Follow" : "Following"}</Btn>
            
        </Item>
    );
};
