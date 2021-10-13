import React from "react";

import { Container, Img, Description, Action, ButtonFavorite, ButtonCart, IconFavorite, IconCardList } from "./style";
 
 import pokemon from "../../assets/pokemon.png"

const ProductsRanking: React.FC = () => {

    return( 
        <Container>
        <Img>
            <img src={pokemon} alt="imagem slider1" style={{width: '100%', height:'100%'}} />     
        </Img>
        <Description>
            <h4>Eevee</h4>
            <p>Eletrecidade</p>
        </Description>
        <Action>
            <ButtonFavorite>
                <IconFavorite/>
            </ButtonFavorite>
            <ButtonCart>
                <h6>R$:</h6>
                <h3>299,90</h3>
                <IconCardList/>

            </ButtonCart>
        </Action>
        </Container>
    )
}

export default ProductsRanking;