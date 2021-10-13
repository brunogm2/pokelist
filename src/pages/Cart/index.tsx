import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Container, Content, ContentData, NameDataType, ContentCard, DataSteam, FormSteam, Search,
         PaymentData, Card, Total, Checkout,
         CardList, Img, Description, Value, SubValue, SymbolMoney, 
        Action, DeleteCart

} from "./style";
import pokemon from "../../assets/pokemon.png"

import Modal from '../../components/Modal';
import Header from '../../components/Header';

import { showMessage} from '../../store/ducks/layout';

function Cart() {

    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(showMessage());
    };

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
                            <Search type="text" placeholder="Steam Hex"/>
                        <FormSteam>
                            <Search type="text" placeholder="ID"/>
                            <Search type="text" placeholder="Steam Guard" style={{marginLeft: "10px"}}/>
                        </FormSteam>
                            <Search type="text" placeholder="Email"/>
                    </DataSteam>
                    <PaymentData>
                        <NameDataType>
                            <h4>
                                Dados de Pagamento
                            </h4>
                        </NameDataType> 
                            <Search type="text" placeholder="Número do Cartão"/>
                        <FormSteam>
                            <Search type="text" placeholder="Validade"/>
                            <Search type="text" placeholder="CVV" style={{marginLeft: "10px"}}/>
                        </FormSteam>
                        <FormSteam>
                            <Search type="text" placeholder="Nome do titular"/>
                            <Search type="text" placeholder="CPF / CNPJ do titular" style={{marginLeft: "10px"}}/>
                        </FormSteam>
                    </PaymentData>
                </ContentData>
                <ContentCard>
                    <Card>
                        <h4>Meu Carrinho</h4>
                        <CardList>
                            <Img>
                                <img src={pokemon} alt="imagem sslider1" style={{width: '100%', height:'100%'}} />     
                            </Img>
                            <Description>
                                <h4>Eevee</h4>
                                <p>Eletrecidade</p>
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
                                <DeleteCart>
                                    <h3>-</h3>
                                </DeleteCart>
                            </Action>
                                        
                        </CardList>
                    </Card>
                    <Total>
                        <h5>Total:</h5>
                        <h4>R$ 79,90</h4>
                    </Total>
                    <Checkout onClick={openModal}>
                        <h3>
                            Finalizar Compra
                        </h3>
                    </Checkout>
                </ContentCard>
            </Content>
        </Container>  
    );
}

export default Cart;