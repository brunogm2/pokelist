const DefaultState = {
    loading: false,
    data: [],
    erroMsg: ""
};

const PokemonListReducer = (state = DefaultState, action:any) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading:true,
            };
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading:false,
                erroMsg: "Not Pokemons!"
            };
            
        case "POKEMON_LIST_SUCESS":
            return {
                ...state,
                loading:true,
                data: action.payload,
                erroMsg: ""
            };
           
        default:
            return state;
    }
}

export default PokemonListReducer;