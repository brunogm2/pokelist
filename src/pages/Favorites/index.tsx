import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritesPokemons from "../../components/FavoritesPokemons";
import Header from "../../components/Header";
import { Container, Content, CardsList, TitlePage } from "./style";


function Favorites() {

    // const dispatch = useDispatch();
    const favoriteList = useSelector((state:any) => state.favorite.data);

    return(
        <Container>
            <Header/>
            <Content>
            
            <TitlePage>
                <h4>
                    Favoritos
                </h4>
            </TitlePage> 
                <CardsList>
                {favoriteList != '' ?
                   favoriteList.map((pokemon:any, index:any) => {
                        return(<FavoritesPokemons
                            key={index}
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                            />
                        )
                    })
                    :  <h4 style={{marginLeft: "auto", marginRight: "auto", color: "#fff"}}>Não existe produtos favoritado!</h4> 
                    
                    }
                </CardsList>
                
                
            </Content>
        </Container>
    )

}

export default Favorites;