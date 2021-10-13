import styled from 'styled-components';

import { MdFavorite } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    
    >p{
        color: #D2D2D2;
        font-size: 32px;
    }
`;

export const HeaderButtons = styled.div`
    width: auto;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const Favorites = styled.div`
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary);
    cursor: pointer;
`;

export const FavoritesIcon = styled(MdFavorite)  `
     width: 46px;
     height: 42px;
     fill: #D2D2D2;
`;

export const Cart = styled(Favorites)`

`;

export const CartIcon = styled(RiShoppingCart2Line)`
    width: 46px;
    height: 42px;
    fill: #D2D2D2;
`;
