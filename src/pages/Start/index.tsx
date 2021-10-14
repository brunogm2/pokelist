import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Container,
        Content, 
        LeftContainer, HighlightSession, ContainerFullPackageDescription, ContainerBanner, Banner, New, DescriptionFull, PurchaseFullPackage, ValueFullPackage, Purchase,
        RankingSession,ContentNews, ImgNews, DescriptionNews, PremiumCard, RankingCard,
        RightContainer, Search, ContentList, DownloadApp, ImgApp, Platforms, Steam, Playstation, PlayStore
 } from "./style"
 import banner from "../../assets/banner.png"
 import newspokemon from "../../assets/newspokemon.jpg"
 import pokemonapp from "../../assets/pokemonapp.jpg"


 import Header from '../../components/Header';
 import ProductsList from '../../components/ProductsList';
 
 import { GetPokemonList } from "../../store/ducks/pokemons/pokemonActions";
 
function Start() {

  const dispatch = useDispatch();
  const pokemonList = useSelector((state:any) => state.pokemons);

  const addItemCart = (id:string, name:string, image:string, type:string): void => {
    const ItemObjectCart = {id, name, image, type};
    dispatch({
            type: "CARRINHO_LIST_SUCESS",
            payload: ItemObjectCart
    })
  }

  const addItemFavorite = (id:string, name:string, image:string, type:string): void => {
    const ItemObjectFavorite = {id, name, image, type};
    dispatch({
            type: "FAVORITE_LIST_SUCESS",
            payload: ItemObjectFavorite
    })
  }
  
  useEffect(() => {
      dispatch(GetPokemonList('dispatch'));
  }, [dispatch]);

  const [filter, setFilter] = useState('')
  
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
                        <h4>ESGOTADO!</h4>
                      </Purchase>
                    </PurchaseFullPackage>
                  </ContainerFullPackageDescription>
                  <ContainerBanner>
                    <Banner>
                      <img src={banner} alt="banner" style={{width: '100%', height:'100%'}} />     
                    </Banner>
                  </ContainerBanner>
                </HighlightSession>
                <RankingSession>
                    <PremiumCard>
                        <h3>Plataformas</h3>
                        <DownloadApp>
                         <ImgApp>
                          <img src={pokemonapp} alt="plataformas" style={{width: '100%', height:'100%', borderRadius: '10px'}} />     
                         </ImgApp>    
                          <Platforms>
                            <Steam/>
                            <Playstation/>
                            <PlayStore/>
                          </Platforms>
                        </DownloadApp>
                    </PremiumCard>
                    <RankingCard>
                      <h3>Noticias</h3>
                      <ContentNews>
                        <ImgNews>
                            <img src={newspokemon} alt="news" style={{width: '100%', height:'100%', borderRadius: '10px'}} />     
                        </ImgNews>

                        <DescriptionNews>
                          <p>
                            O desenho acompanha a jornada de Ash Ketchum, um corajoso garoto da cidade de Pallet, 
                            que sonha se tornar um Mestre Pokémon. Ao completar 10 anos, 
                            ele finalmente pode pegar o seu primeiro Pokémon mas acaba chegando atrasado na distribuição e 
                            todos os Pokémon iniciais (Bulbasaur, Charmander e Squirtle) 
                            já haviam sido escolhidos por outros treinadores. 
                          </p>
                        </DescriptionNews>
                      </ContentNews>
                    </RankingCard>
                </RankingSession>
              </LeftContainer>
              <RightContainer>
              <Search type="text" placeholder="Pesquisar ..." onChange={(e:any) => {setFilter(e.target.value)}}/>
              <h4>Todos</h4>
                <ContentList>
                {pokemonList.data.filter((values:any) => {
                  if(filter == ""){
                    return values
                  }else if (values.name.toLowerCase().includes(filter.toLowerCase())){
                    return values
                  }
                }).map((pokemon:any, index:any) => {
                  return(
                      <ProductsList
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.back_default}
                        type={pokemon.types[0].type.name}
                        addItemCart={addItemCart}
                        addItemFavorite={addItemFavorite}
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
  