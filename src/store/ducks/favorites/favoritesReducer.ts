interface Props {
    loading: boolean,
    data: any,
    erroMsg: string,
}

const DefaultState: Props = {
    loading: false,
    data: [],
    erroMsg: "",
};

const FavoriteReducer = (state = DefaultState, action:any) => {
    switch (action.type) {
        case "FAVORITE_LIST_LOADING":
            return {
                ...state,
                loading:true,
            };
            
        case "FAVORITE_LIST_FAIL":
            return {
                ...state,
                loading:false,
                erroMsg: "Not Pokemons!"
            };
            
        case "FAVORITE_LIST_SUCESS":
    
            return {
                ...state,
                loading:true,   
                data: state.data.concat(action.payload),
                erroMsg: ""
            };
           
        case "FAVORITE_LIST_CLEAR":
    
            return {
                ...state,
                loading:true,   
                data: [],
                erroMsg: ""
            };
        
        case "FAVORITE_ITEM_DELETE":
            
        return {
            ...state,
            loading:true,   
            data: state.data.filter((item:any) => item.id !== action.payload.id),
            erroMsg: ""
        };

        default:
            return state;
    }
}

export default FavoriteReducer;