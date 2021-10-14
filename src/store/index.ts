import { configureStore} from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";

import PokemonListReducer from '../store/ducks/pokemons/pokemonListReducer';
import layoutReducers from './ducks/layout'
import CartReducer from "./ducks/cart/cartReducer";
import FavoriteReducer from "./ducks/favorites/favoritesReducer";

export default configureStore({
    reducer: {
        pokemons: PokemonListReducer,
        layout: layoutReducers,
        cart: CartReducer,
        favorite: FavoriteReducer
    }
});

