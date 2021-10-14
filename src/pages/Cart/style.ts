import styled from 'styled-components';

import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const Container = styled.div`
    background-image:  linear-gradient(15deg, rgba(39,42,50,1) 49%, rgba(66,75,99,1) 99%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 95%;
    height: 500px;
    display: flex;
    flex-direction: row;
    padding-left: 15px;
`;

export const ContentData = styled.div`
    width: 50%;
    height: 95%;
`;

export const ContentCard = styled(ContentData)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Card = styled.div`
    width: 70%;
    height: 70%;
    margin-bottom: 10px;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid var(--color-border);
    padding: 20px;
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

    >h4{
        color: var(--color-letters-secondary);
        margin-bottom: 10px;
    }
    
`;

export const CardList = styled.div`
    width: 99%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    margin-left: 10px;

    >h6{
        color: var(--color-letters-secondary);
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
        color: var(--color-letters-secondary);
    }

`;


export const Action = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

export const DeleteCart = styled.div`
    width: 50%;
    height: 60%;
    border-radius: 10px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    >h3{
        color: red;
    }
`;

export const Total = styled.div`
    height: 10%;
    width: 70%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: none;

    >h4, h5{
        color: var(--color-letters-primary);
    }
`;

export const Checkout = styled.button`
    height: 10%;
    width: 70%;
    background-color: greenyellow;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--color-button-reference);
    -webkit-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    -moz-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    cursor: pointer;

    >h3{
        color: var(--color-letters-reference);;
    }
`;

export const NameDataType = styled.div`
    width: 190px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--color-button-reference);
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
    
    >h4{
        color: var(--color-letters-secondary);
    }
`;

export const DataSteam = styled.form`
    width: 100%;
    height: 45%;
`;

export const FormSteam = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Search = styled.input`
    width: 100%;
    height: 40px;
    background-color: var(--color-inputs);
    border: 1px solid var(--color-letters-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    color: var(--color-letters-primary);
    font-size: 15px;
    outline: 0;
    margin-top: 20px;

    ::placeholder {
        color: var(--color-letters-primary);
        font-size: 15px;
  }
`;

export const PaymentData = styled(DataSteam)`
    margin-top: 18px;
    height: 55%;

`;

export const Button = styled.button`
    margin-top: 18px;
    height: 55%;

`;
