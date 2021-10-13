import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Container,
       
        Content, 
        LeftContainer, HighlightSession, ContainerFullPackageDescription, ContainerBanner, Banner, New, DescriptionFull, PurchaseFullPackage, ValueFullPackage, Purchase,
        RankingSession, PremiumCard, RankingCard,
        RightContainer, Search, ContentList
 } from "./style"
 import banner from "../../assets/banner.png"

 import Header from '../../components/Header';
 import ProductsList from '../../components/ProductsList';
 import ProductsRanking from '../../components/ProductsRanking';
 import { GetPokemonList } from "../../store/ducks/pokemons/pokemonActions";
 import { addItem } from "../../store/ducks/cart"
 
import { CarrinhoItem } from "../../store/ducks/carrinho/carrinhoActions";

import _ from "lodash";
// import { getPokemons } from "../../store/fetchActions/index"

function Start() {

  const dispatch = useDispatch();
  
  const pokemonList = useSelector((state:any) => state.pokemons);
  
  

  console.log(pokemonList);

    useEffect(() => {
      dispatch(GetPokemonList('k'));
  }, [dispatch]);
  
  function addItemCart(id:string, name:string, image:string, type:string): void {
    const ItemObject = {id, name, image, type};
    dispatch({
            type: "CARRINHO_LIST_SUCESS",
            payload: ItemObject
    })
  }
    return (
      <>

      <Container>
        <Header/>
          <Content>
              <LeftContainer>
                <HighlightSession>
                  <ContainerFullPackageDescription>
                    <New>
                      <h6>NEW</h6>
                    </New>
                    <DescriptionFull>
                      <h1>Adquira agora o plano Pacote FULL Pokers</h1>
                    </DescriptionFull>
                    <PurchaseFullPackage>
                      <ValueFullPackage>
                        <h5>R$:</h5>
                        <h2>12,500,90</h2>
                      </ValueFullPackage>
                      <Purchase>
                        <h4>Adquira!</h4>
                      </Purchase>
                    </PurchaseFullPackage>
                  </ContainerFullPackageDescription>
                  <ContainerBanner>
                    <Banner>
                      <img src={banner} alt="imagem slider1" style={{width: '100%', height:'100%'}} />     
                    </Banner>
                  </ContainerBanner>
                </HighlightSession>
                <RankingSession>
                    <PremiumCard>

                    </PremiumCard>
                    <RankingCard>
                      <h3>Rankings</h3>
                        <ProductsRanking/>
                        <ProductsRanking/>
                        <ProductsRanking/>

                    </RankingCard>
                </RankingSession>
              </LeftContainer>
              <RightContainer>
              <Search type="text" placeholder="Pesquisar ..."/>
              <h4>Todos</h4>
                <ContentList>
                {pokemonList.data.map((pokemon:any, index:any) => {
                  return(
                      <ProductsList
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.back_default}
                        type={pokemon.types[0].type.name}
                        addItemCart={addItemCart}
                      />
                  )
                })}
                </ContentList>
              </RightContainer>
          </Content>
      </Container>
      </>
    );
  }
  
  export default Start;
  