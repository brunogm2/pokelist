import styled from 'styled-components';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { FaGooglePlay, FaPlaystation, FaSteam } from 'react-icons/fa'

export const Container = styled.header`
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
        color: var(--color-letters-primary);
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
     fill: var(--color-letters-primary);
`;

export const Cart = styled(Favorites)`

`;

export const CartIcon = styled(RiShoppingCart2Line)`
    width: 46px;
    height: 42px;
    fill: var(--color-letters-primary);
`;

export const Content = styled.div`
    width: 100%;
    height: 547px;
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
`;

export const HighlightSession = styled.div`
    width: 90%;
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
        color: var(--color-letters-secondary);
    }
`;

export const DescriptionFull = styled.div`
    width: 100%;
    height: 100px;

    >h1{
        color: var(--color-letters-secondary);
    }
`;

export const PurchaseFullPackage = styled.div`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    background-color: var(--color-inputs);
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
        color: var(--color-letters-secondary);
        text-decoration: line-through;
    }

    >h5{
        margin-right: 5px;
        margin-top: 7px;
        color: var(--color-letters-secondary);
    }
`;

export const Purchase = styled(ValueFullPackage)`
    background-color: var(--color-button-reference);
    margin-left: 10px;
    -webkit-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    -moz-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    cursor: pointer;

    >h4{
        color: var(--color-letters-reference);
    }
`;

export const ContainerBanner = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Banner = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 60px;
    transform: rotate(-8deg);
    transform-origin: left top 0;
`;

export const RankingSession = styled.div`
    width: 90%;
    height: 50%;
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
    padding: 15px;

    >h3{
        color: var(--color-letters-secondary);;
    }

`;

export const RankingCard = styled.div`
    width: 70%;
    height: 100%;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    z-index: 999;
    background-image:  linear-gradient(5deg, rgba(39,42,50,1) 65%, rgba(66,75,89,1) 99%);
    padding: 30px;
    display: flex;
    flex-direction: column;

    >h3{
        margin-top: -15px;
        margin-bottom: 5px;
        color: var(--color-letters-secondary);
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
        color: var(--color-letters-primary);
        margin-bottom: 15px;
    }
`;

export const ContentList= styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-inputs);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-scrollbar);
    border-radius: 10px;

  }

`;

export const Search = styled.input`
    width: 100%;
    height: 40px;
    background-color: var(--color-inputs);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    color: var(--color-border);
    font-weight: bold;
    font-size: 15px;
    outline: 0;

    ::placeholder {
        color: var(--color-border);
        font-size: 15px;
        margin-left: 50px;
        font-weight: bold;
  }
`;

export const ImgNews = styled.div`
    width: 30%;
    height: 100%;
`;

export const DescriptionNews = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 30px;
    display: flex;
    align-items: center;

    >p{
        font-size: 14px;
        color: var(--color-letters-primary);
    }
`;

export const ContentNews = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 0px 10px 0px;
`;


export const DownloadApp = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ImgApp = styled.div`
    width: 80%;
    height: 50%;
    margin-top: 20px;
`;

export const Platforms = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Steam = styled(FaSteam)`
    width: 36px;
    height: 32px;
    fill: var(--color-letters-secondary);
    cursor: pointer;
`;

export const Playstation = styled(FaPlaystation)`
    width: 36px;
    height: 32px;
    fill: var(--color-letters-secondary);
    margin: 0px 15px 0px 15px;
    cursor: pointer;
`;

export const PlayStore = styled(FaGooglePlay)`
    width: 36px;
    height: 32px;
    fill: var(--color-letters-secondary);
    cursor: pointer;
`;