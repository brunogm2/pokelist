import React, { useState, InputHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Content, ContentData, NameDataType, ContentCard, DataSteam, FormSteam, Search,
         PaymentData, Card, Total, Checkout,
         CardList, Img, Description, Value, SubValue, SymbolMoney, 
        Action, DeleteCart

} from "./style";

import Modal from '../../components/Modal';
import Header from '../../components/Header';

import { showMessage} from '../../store/ducks/layout';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string;
    image: string;
    type: string; 
   
    deleteItem: (id:string, name:string, image:string, type:string) => void;
}

function Cart<Props>() {

    const cart = useSelector((state:any) => state.cart.data)
    const dispatch = useDispatch();
    
    const openModal = () => {
        dispatch(showMessage());
    };

    const deleteItem = (id:string, name:string, image:string, type:string) => {
        const data = ({id, name, image, type});

        dispatch({
            type: "CARRINHO_ITEM_DELETE",
            payload: data
        });
    }


    return (
        <Container>
            <Header />
            <Content>
                    <Modal />
                <ContentData>
                    <DataSteam>
                        <NameDataType>
                            <h4>
                                Dados da Steam
                            </h4>
                        </NameDataType> 
                            <Search type="text" name="hex" placeholder="Steam Hex"/>
                        <FormSteam>
                            <Search type="text" name="id" placeholder="ID"/>
                            <Search type="text" name="guard" placeholder="Steam Guard" style={{marginLeft: "10px"}}/>
                        </FormSteam>
                            <Search type="text" name="email" placeholder="Email"/>
                    </DataSteam>
                    <PaymentData>
                        <NameDataType>
                            <h4>
                                Dados de Pagamento
                            </h4>
                        </NameDataType> 
                            <Search type="text" name="cartao" placeholder="Número do Cartão"/>
                        <FormSteam>
                            <Search type="text" name="validade" placeholder="Validade"/>
                            <Search type="text" name="cavv" placeholder="CVV" style={{marginLeft: "10px"}}/>
                        </FormSteam>
                        <FormSteam>
                            <Search type="text" name="titular" placeholder="Nome do titular"/>
                            <Search type="text" name="cpf" placeholder="CPF / CNPJ do titular" style={{marginLeft: "10px"}}/>
                        </FormSteam>
                    </PaymentData>
                </ContentData>
                <ContentCard>
            
                    <Card>
                    <h4>Meu Carrinho</h4>
                        
                        {cart != '' ?
                          cart.map((pokemon:any, index:any) => {
                                return(
                                    <CardList>
                                        <Img>
                                            <img src={pokemon.image} alt="imagem sslider1" style={{width: '100%', height:'100%'}} />     
                                        </Img>
                                        <Description>
                                            <h4>{pokemon.name}</h4>
                                            <p>{pokemon.type}</p>
                                        </Description>
                                        <Value>
                                            <SymbolMoney>
                                                <h6>R$:</h6>
                                            </SymbolMoney>
                                            <SubValue>
                                                <h3>299,90</h3>
                                            </SubValue>
                                        </Value>
                                        <Action>
                                            <DeleteCart onClick={() => deleteItem(pokemon.id, pokemon.name, pokemon.type, pokemon.image)}>
                                                <h3>-</h3>
                                            </DeleteCart>
                                        </Action>
                                                    
                                    </CardList>
                                )
                                })
                                :
                                <h4 style={{marginLeft: "auto", marginRight: "auto"}}>Sem produtos no carrinho!</h4> 
                        }
                        
                    </Card>
                   
                    {cart != '' ? 
                        <>
                            <Total>
                                <h5>Total:</h5>
                                <h4>R$ 299,90</h4>
                            </Total>
                            <Checkout onClick={openModal}>
                                <h3>
                                    Finalizar Compra
                                </h3>
                            </Checkout> 
                        </>:
                        null
                    }
                   
                </ContentCard>
            </Content>
        </Container>  
    );
}

export default Cart;