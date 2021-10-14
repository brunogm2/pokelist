import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const Container = styled.div`
    width: 250px;
    height: 200px;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    background-image:  linear-gradient(5deg, rgba(39,42,50,1) 65%, rgba(66,75,89,1) 99%);
    margin: 11px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;


export const ContentImg = styled.div`
    width: 40%;
    height: 50%;
`;

export const ContentDescribe = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 22px;

`;
export const Title = styled.div`
     width: 100%;
     height: 15%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-top: 20px;
     margin-bottom: 10px;
     align-items: center;

     >h4{
         color: var(--color-letters-secondary);
     }
`;

export const FavoritesIcon = styled(MdFavorite)  `
     width: 25px;
     height: 22px;
     fill: var(--color-letters-secondary);
     float: inherit;
      margin-top: -60px;
      cursor: pointer;
`;

export const Description = styled.div`
    width: 100%;
    height: 25%;
    margin-bottom: 10px;

    >p{
        color: var(--color-letters-secondary);
        font-size: 12px;
    }

`;

export const ButtonCart = styled.div`
    width: 130px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: black;
    cursor: pointer;
    border: none;

    >h6{
        margin-top: 7px;
        margin-right: 10px;
        color: var(--color-letters-secondary);
    }

    >h4{
        color: var(--color-letters-secondary);
    }
`;

export const IconCardList = styled(RiShoppingCart2Line)`
    color: var(--color-letters-secondary);
    font-size: 25px;
    margin-left: 20px;
`;