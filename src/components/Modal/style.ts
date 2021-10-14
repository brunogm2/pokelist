import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.50);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  transition: opacity 0.3s ease-out;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 12px;
  background: #FBFCFE;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-content: center;
  flex-direction: column;
  background-color: var(--color-letters-reference);
  border-radius: 10px 10px 0px 0px;

  >h3{
    color: rgba(0, 0, 0, 0.70)
  }
`;

export const Thanks = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >h3{
    color: var(--color-letters-secondary);
    margin-bottom: 10px;
  }

  >p{
    font-size: 12px;
    color: var(--color-letters-primary);
  }
  
`;

export const Checkout = styled.div`
    height: 50px;
    width: 200px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #a6463a;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 25px;

    >h3{
        color: var(--color-letters-secondary);
    }
`;