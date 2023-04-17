
import { HIDE_LOADING, SHOW_LOADING } from "../constants/LoaderConstant"


export const showLoaderAction = () => async(dispatch) =>{
    dispatch({type: SHOW_LOADING})
}

export const hideLoaderAction = () => async(dispatch) =>{
    dispatch({type: HIDE_LOADING})
}