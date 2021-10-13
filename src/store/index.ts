import { configureStore} from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";

// import pokemonReducer from '../store/ducks/pokemons/reducers/PokemonReducer';
import PokemonListReducer from '../store/ducks/pokemons/pokemonListReducer';
import layoutReducers from './ducks/layout'
// import cartReducer from './ducks/cart'
import CarrinhoReducer from "./ducks/carrinho/carrinhoReducer";

export default configureStore({
    reducer: {
        pokemons: PokemonListReducer,
        layout: layoutReducers,
        cart: CarrinhoReducer
    }
});

