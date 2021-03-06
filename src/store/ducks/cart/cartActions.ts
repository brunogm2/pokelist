import {Dispatch} from "redux";
import { useDispatch } from "react-redux";
import api from "../../../services/api";

interface Props {
    results: any;
    count: number;
  }

export const CarrinhoItem = (page: any) => async (dispatch: Dispatch) => {

    try {
    dispatch({
        type: "CARRINHO_LIST_LOADING"
    })


     dispatch({
        type: "CARRINHO_LIST_CLEAR",
        payload: []
    })


    } catch (error) {
        dispatch({
            type: "CARRINHO_LIST_FAIL"
        })
    }

} 