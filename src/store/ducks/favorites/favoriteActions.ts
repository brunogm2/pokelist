import {Dispatch} from "redux";
import { useDispatch } from "react-redux";
import api from "../../../services/api";

interface Props {
    results: any;
    count: number;
  }

export const FavoriteItem = (page: any) => async (dispatch: Dispatch) => {

    try {
    dispatch({
        type: "FAVORITE_LIST_LOADING"
    })


     dispatch({
        type: "FAVORITE_LIST_CLEAR",
        payload: []
    })


    } catch (error) {
        dispatch({
            type: "FAVORITE_LIST_FAIL"
        })
    }

} 