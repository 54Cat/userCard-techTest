import styled from '@emotion/styled';

import logo from '../../data/img/Logo.png';
import bg from '../../data/img/bg.png';

export const Item = styled.li`
    // background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-color: #4B2A99;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    width: 380px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-right: 48px;
    margin-bottom: 48px;
    
    background-image: url(${logo}), url(${bg});
    background-repeat: no-repeat;
    background-position: top 20px left 20px, top 28px left 36px;
    background-size: auto, auto;

    &:last-child { 
        margin: 0;
    }
`;
    
export const AvatarThumb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8px;
    background-color: #EBD8FF;
    box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.5px #AE7BE3, inset 0px 3.5px 2.5777px #FBF8FF;
    margin-bottom: 62px;
`;

export const Avatar = styled.img`
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%; 
    border: 8px solid #EBD8FF;
    box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.5px #AE7BE3, inset 0px 3.5px 2.5777px #FBF8FF;
`;

export const InfoList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 26px;
`;

export const InfoItem = styled.li`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #EBD8FF;
    margin-bottom: 16px;
    
    &:last-child { 
        margin: 0;
    }
`;

export const Btn = styled.button`
    padding: 14px 28px;
    background-color: #EBD8FF;
    width: 196px;
    height: 50px;
    box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-transform: uppercase;
    color: #373737;
    margin-bottom: 36px;
    cursor: pointer;

    &.active {
        background-color: #5CD3A8;
    }
`;