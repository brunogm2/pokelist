import styled from 'styled-components';

import { MdFavorite } from 'react-icons/md'
import { RiShoppingCart2Line, RiHome8Line } from 'react-icons/ri'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    
    >h6{
        color: var(--color-letters-primary);
        font-size: 28px;
    }
    >p{
        color: var(--color-letters-secondary);
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
     fill: var(--color-letters-primary);
`;

export const Cart = styled(Favorites)`

`;

export const CartIcon = styled(RiShoppingCart2Line)`
    width: 41px;
    height: 41px;
    fill: var(--color-letters-primary);
`;

export const CountCart = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    margin-left: -10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
  
    >h6{
        color: var(--color-letters-secondary);
    }
`;

export const Home = styled(Favorites)`

`;

export const HomeIcon = styled(RiHome8Line)`
    width: 41px;
    height: 41px;
    fill: var(--color-letters-primary);
`;
