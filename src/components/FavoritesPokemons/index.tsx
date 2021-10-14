import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Container, ContentImg, ContentDescribe, Title, FavoritesIcon, Description, ButtonCart, IconCardList } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string;
  image: string;
  type: string; 
}

const FavoritesPokemons: React.FC<Props> = ({ id, name, image, type, }) => {

  const dispatch = useDispatch();
  
  const deleteItem = () => {
    const data = ({id, name, image, type});
    dispatch({
        type: "FAVORITE_ITEM_DELETE",
        payload: data
    });
  }

  const addItemCart = () => {
    const ItemObjectCart = {id, name, image, type};
    dispatch({
            type: "CARRINHO_LIST_SUCESS",
            payload: ItemObjectCart
    })
  }

  return(
    <Container >
        <ContentImg>
        <img src={image} alt="imagem sslider1" style={{width: '100%', height:'100%'}} />     

        </ContentImg>
        <ContentDescribe>
          <Title>
            <h4>
              {name}
            </h4>
            <FavoritesIcon onClick={() => deleteItem()}/>
          </Title>
          <Description>
              <p>
                {type}
              </p>
          </Description>
          <ButtonCart onClick={() => addItemCart()}>
                <h6>R$:</h6>
                <h4>299,90</h4>
                <IconCardList/>

            </ButtonCart>
        </ContentDescribe>
    </Container>
  )
}

export default FavoritesPokemons;