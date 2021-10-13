import {Dispatch} from "redux";
import { useDispatch } from "react-redux";
import api from "../../../services/api";

interface Props {
    results: any;
    count: number;
  }

export const GetPokemonList = (page: any) => async (dispatch: Dispatch) => {

    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        })

        api.get<Props>('/pokemon')
        .then(response => {
          const data = response.data.count;
       
          const generatePokemonPromisses = () => Array<Number>(20).fill(0).map((_, index) =>
              api.get(`/pokemon/${index + 1}`).then((res) => res.data).catch(console.log))
            
          var pokemonPromises = generatePokemonPromisses();

          Promise.all(pokemonPromises)
              .then(pokemon =>{
                dispatch({
                    type: "POKEMON_LIST_SUCESS",
                    payload: pokemon
                })
          })
        })
        

    } catch (error) {
        dispatch({
            type: "POKEMON_LIST_FAIL"
        })
    }

} 