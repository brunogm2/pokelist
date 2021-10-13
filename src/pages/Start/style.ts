import styled from 'styled-components';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const Container = styled.header`
    /* background-color: var(--color-primary); */
    background-image:  linear-gradient(15deg, rgba(39,42,50,1) 49%, rgba(66,75,99,1) 99%);
    min-height: 100vh;
`;

export const Header = styled.div`
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

export const Content = styled.div`
    width: 100%;
    height: 547px;
    /* background-color: wheat; */
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const LeftContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* background-color: red; */
`;

export const HighlightSession = styled.div`
    width: 850px;
    height: 50%;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const ContainerFullPackageDescription = styled.div`
    width: 45%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

export const New = styled.div`
    width: 12%;
    height: 15px;
    border-radius: 5px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    >h6{
        color: #FFFFFF;
    }
`;

export const DescriptionFull = styled.div`
    width: 100%;
    height: 100px;
    /* background-color: green; */

    >h1{
        color: #FFFFFF;
    }
`;

export const PurchaseFullPackage = styled.div`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    background-color: #1C1C1F;
    padding: 5px;
    display: flex;
    flex-direction: row;
    
`;

export const ValueFullPackage = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    >h2{
        color: #FFFFFF
    }

    >h5{
        margin-right: 5px;
        margin-top: 7px;
        color: #FFFFFF
    }
    /* background-color: red; */
`;

export const Purchase = styled(ValueFullPackage)`
    background-color: #FFCB06;
    margin-left: 10px;
    -webkit-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    -moz-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    cursor: pointer;

    >h4{
        color: #024EA3;
    }
`;

export const ContainerBanner = styled.div`
    width: 55%;
    height: 100%;
    /* background-color: green; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const Banner = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 60px;
    transform: rotate(-8deg);
    transform-origin: left top 0;
    /* background-color: black; */
`;

export const RankingSession = styled.div`
    width: 850px;
    height: 50%;
    /* background-color: red; */
    margin-bottom: 25px;
    display: flex;
`;

export const PremiumCard = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    margin-right: 40px;
    background-image:  linear-gradient(5deg, rgba(39,42,50,1) 65%, rgba(66,75,89,1) 99%);

`;

export const RankingCard = styled.div`
    width: 70%;
    height: 100%;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    z-index: 999;
    background-image:  linear-gradient(5deg, rgba(39,42,50,1) 65%, rgba(66,75,89,1) 99%);
    padding: 30px;

    >h3{
        margin-top: -15px;
        margin-bottom: 5px;
        color: #D2D2D2;
    }

`;

export const RightContainer = styled.div`
    width: 30%;
    height: 98%;
    border: 1px solid var(--color-border);
    border-radius: 20px 0px 0px 20px;
    padding: 30px;
    
    margin-bottom: 10px;
    >h4{
        margin-top: 10px;
        color: #D2D2D2;
        margin-bottom: 15px;
    }
`;

export const ContentList= styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    overflow-y: scroll;
    overflow-x: hidden;

    
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1C1C1F;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #40444E;
    border-radius: 10px;

  }

`;

export const Search = styled.input`
    width: 100%;
    height: 40px;
    background-color: #1C1C1F;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    color: #A9A9A9;
    font-weight: bold;
    font-size: 15px;
    outline: 0;

    ::placeholder {
        color: #A9A9A9;
        font-size: 15px;
        margin-left: 50px;
        font-weight: bold;
  }
`;
