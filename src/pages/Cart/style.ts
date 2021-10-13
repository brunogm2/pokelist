import styled from 'styled-components';

import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'

export const Container = styled.header`
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
    height: 100%;
`;

export const ContentCard = styled(ContentData)`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* justify-content: end; */
`;

export const Card = styled.div`
    width: 70%;
    height: 70%;
    /* background-color: green; */
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid var(--color-border);
    padding: 20px;
    
    >h4{
        color: #FFFF;
        margin-bottom: 10px;
    }
`;

export const CardList = styled.div`
    width: 99%;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #A9A9A9;
    margin-bottom: 20px;
    /* margin-right: 20px; */
    /* background-color: red; */
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
    
`;

export const SymbolMoney = styled.div`
    width: 25%;
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

export const Total = styled(Card)`
    height: 10%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: none;

    >h4, h5{
        color: #D2D2D2;
    }
`;

export const Checkout = styled(Card)`
    height: 10%;
    background-color: greenyellow;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #FFCB06;
    /* margin-left: 10px; */
    -webkit-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    -moz-box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    box-shadow: 1px 2px 23px 0px rgba(255,203,6,0.48);
    cursor: pointer;

    >h3{
        color: #024EA3;
    }
`;

export const NameDataType = styled.div`
    width: 190px;
    padding-bottom: 8px;
    border-bottom: 2px solid #FFCB06;
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
    
    >h4{
        color: #FFFF;
    }
`;

export const DataSteam = styled.div`
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
    background-color: #1C1C1F;
    border: 1px solid #D2D2D2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    color: #D2D2D2;
    font-size: 15px;
    outline: 0;
    margin-top: 20px;

    ::placeholder {
        color: #D2D2D2;
        font-size: 15px;
  }
`;

export const PaymentData = styled(DataSteam)`
    margin-top: 18px;
    height: 55%;
  
`;