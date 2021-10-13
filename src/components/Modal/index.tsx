import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import ReactDOM  from 'react-dom';
import Lottie from "react-lottie";
import { NavLink } from "react-router-dom";

import { Container, Content, Header, Thanks, Checkout } from './style';
import pokemonanimation from "../../assets/pokemonfinish.json.json"
import { hideMessage } from '../../store/ducks/layout';


const Modal: React.FC = ({}) => {

  const modalRoot = document.getElementById("portal-root") as HTMLElement;
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pokemonanimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isShow = useSelector((state: any) => state.layout.showMessage);
  const dispatch = useDispatch();
  const onDimiss = () => {
    dispatch(hideMessage());
  };


  return ReactDOM.createPortal(
    <>
      {isShow ? 
      <Container>
        <Content>
          <Header>
            <Lottie options={defaultOptions} height={200} width={200} />
            <Thanks>
                  <h3>Obrigado pela compra!</h3>
                  <p>Ficamos felizes de ter escolhido nós!</p>
                  <p>Seu produto ficara disponível em até 48h!</p>
            </Thanks>
          </Header>
          <NavLink onClick={onDimiss} to="/" style={{color: 'transparent'}}>
            <Checkout>
              <h3>Até a próxima!</h3>
            </Checkout>
          </NavLink>
        </Content>
      </Container>
      : null}
    </>, modalRoot
    
  );
}

export default Modal;