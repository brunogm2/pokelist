import styled from 'styled-components';

export const Container = styled.div`
    background-image:  linear-gradient(15deg, rgba(39,42,50,1) 49%, rgba(66,75,99,1) 99%);
    min-height: 100vh;
`;

export const Content = styled.div`
    width: 90%;
    height: 500px;
    margin: 0 auto;
    
    >h3{
        color: var(--color-letters-primary);
        margin: 0px 0px 20px 50px;
    }
`; 

export const CardsList = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: row;
    word-wrap: break-word;
    flex-wrap: wrap;
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

export const TitlePage = styled.div`
    width: 130px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--color-button-reference);
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
    margin: 0px 0px 20px 50px;
    
    >h4{
        color: var(--color-letters-secondary);
    }
`;