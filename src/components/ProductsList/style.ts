import styled from 'styled-components';
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const CardList = styled.div`
    width: 99%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 20px;
`;

export const Img = styled.div`
    width: 20%;
    height: 100%;
`;

export const Description = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;

    >h4{
        color: var(--color-letters-secondary);
    }

    >p{
        color: var(--color-letters-secondary);
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

`;

export const SymbolMoney = styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    margin-left: 10px;

    >h6{
        color: var(--color-letters-secondary);
        margin-top: 4px;
    }
`;

export const SubValue = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    margin: 5px;

    >h4{
        color: var(--color-letters-secondary);
    }

`;


export const Action = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

export const ButtonFavorite = styled.div`
    width: 50px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--color-letters-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ButtonCart = styled.div`
    width: 180px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--color-letters-secondary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: black;
    margin-left: 10px;
    border: none;
`;

export const IconFavorite = styled(MdOutlineFavoriteBorder)`
    color: var(--color-letters-secondary);
    font-size: 25px;
`;

export const IconCardList = styled(RiShoppingCart2Line)`
    color: var(--color-letters-secondary);
    font-size: 25px;
`;

