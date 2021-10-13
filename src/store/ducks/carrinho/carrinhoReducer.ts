
interface Props {
    loading: boolean,
    data: any,
    erroMsg: string,
    numbers: number
    arr: any

}

const DefaultState: Props = {
    loading: false,
    data: [],
    arr: [],
    erroMsg: "",
    numbers: 0
};

const CarrinhoReducer = (state = DefaultState, action:any) => {
    switch (action.type) {
        case "CARRINHO_LIST_LOADING":
            return {
                ...state,
                loading:true,
            };
        case "CARRINHO_LIST_FAIL":
            return {
                ...state,
                loading:false,
                erroMsg: "Not Pokemons!"
            };
            
        case "CARRINHO_LIST_SUCESS":
    
            return {
                ...state,
                loading:true,   
                data: state.data.concat(action.payload),
                erroMsg: ""
            };
           
        default:
            return state;
    }
}

export default CarrinhoReducer;