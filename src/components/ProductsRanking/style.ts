
import styled from 'styled-components';

import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Img = styled.div`
    width: 15%;
    height: 100%;
`;

export const Description = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    padding-left: 15px;

    >h4{
        color: #F9F9F9;
    }

    >p{
        color: #F9F9F9;
        font-size: 12px;
    }
`;

export const Action = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonFavorite = styled.div`
    width: 30%;
    height: 60%;
    border-radius: 10px;
    border: 1px solid #F9F9F9;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ButtonCart = styled(ButtonFavorite)`
    width: 70%;
    background-color: black;
    margin-left: 10px;
    border: none;

    >h6{
        margin-top: 5px;
        margin-right: 5px;
        color: #F9F9F9;
    }

    >h3{
        color: #F9F9F9;
    }
`;

export const IconFavorite = styled(MdOutlineFavoriteBorder)`
    color: #F9F9F9;
    font-size: 25px;
`;

export const IconCardList = styled(RiShoppingCart2Line)`
    color: #F9F9F9;
    font-size: 25px;
    margin-left: 20px;
`;