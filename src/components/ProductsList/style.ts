import styled from 'styled-components';
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const CardList = styled.div`
    width: 99%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #A9A9A9;
    margin-bottom: 20px;
    /* margin-right: 20px; */
    /* background-color: red; */
`;

export const Img = styled.div`
    width: 20%;
    height: 100%;
 

    /* background-color: green; */
`;

export const Description = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;

    >h4{
        color: #F9F9F9;
    }

    >p{
        color: #F9F9F9;
        font-size: 12px;
    }
`;

export const Value = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    word-wrap: break-word;
    /* background-color: red; */

`;

export const SymbolMoney = styled.div`
    width: 25%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    margin-left: 10px;

    >h6{
        color: #F9F9F9;
        margin-top: 9px;
    }
`;

export const SubValue = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    margin: 5px;

    >h3{
        color: #F9F9F9;
    }

`;


export const Action = styled.div`
    width: 30%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

export const ButtonFavorite = styled.div`
    width: 50%;
    height: 60%;
    /* background-color: blueviolet; */
    border-radius: 10px;
    border: 1px solid #F9F9F9;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ButtonCart = styled(ButtonFavorite)`
    background-color: black;
    margin-left: 10px;
    border: none;
`;

export const IconFavorite = styled(MdOutlineFavoriteBorder)`
    color: #F9F9F9;
    font-size: 25px;
`;

export const IconCardList = styled(RiShoppingCart2Line)`
    color: #F9F9F9;
    font-size: 25px;
`;

