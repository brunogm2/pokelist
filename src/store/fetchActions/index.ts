import {Dispatch} from "redux";

// import api from "../../services/api";
// import { POKEMON_SUCCESS } from "../ducks/pokemons/actions/PokemonActionTypes";

// import { addPokemons } from "../ducks/pokemons/index"


// interface Props {
//     results: any;
//     count: number;
//   }
  

// export const getPokemons = () => {

//       return (dispatch: Dispatch) => {
//           api.get<Props>('/pokemon')
//           .then(response => {
//             const data = response.data.count;
         
//             const generatePokemonPromisses = () => Array<Number>(10).fill(0).map((_, index) =>
//                 api.get(`/pokemon/${index + 1}`).then((res) => res.data).catch(console.log))
              
//             var pokemonPromises = generatePokemonPromisses();

//             Promise.all(pokemonPromises)
//                 .then(pokemon =>{
//                      dispatch({  
//                         type: POKEMON_SUCCESS,
//                         payload: pokemon
//                      })
//             })
            

//           })
//       }
// };