import React, { InputHTMLAttributes, useEffect, useState } from "react";

import { CardList, Img, Description, Value, SubValue, SymbolMoney, 
        Action, ButtonFavorite, ButtonCart, IconFavorite, IconCardList
} from "./style"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string;
    image: string;
    type: string; 
   
    addItemCart: (id:string, name:string, image:string, type:string,) => void;
    addItemFavorite: (id:string, name:string, image:string, type:string,) => void;
}

const ProductsList: React.FC<Props> = ({ id, name, image, type, addItemCart, addItemFavorite }) => {
    
return(
    <>

    <CardList >
        <Img>
            <img src={image} alt="imagem sslider1" style={{width: '100%', height:'100%'}} />     
        </Img>
        <Description>
            <h4>{name}</h4>
            <p>{type}</p>
        </Description>

        <Action >
            <ButtonFavorite onClick={() => addItemFavorite(id, name, image, type)}>
                <IconFavorite/>
            </ButtonFavorite>
            <ButtonCart onClick={() => addItemCart(id, name, image, type)}>
              
                    <SymbolMoney>
                        <h6>R$:</h6>
                    </SymbolMoney>
                    <SubValue>
                        <h4>299,90</h4>
                    </SubValue>
             
                <IconCardList/>
            </ButtonCart>
        </Action>
                    
    </CardList>
    </>
)
}

export default ProductsList;