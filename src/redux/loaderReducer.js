import { HIDE_LOADING, SHOW_LOADING } from "../constants/LoaderConstant";


export const loaderReducer = (state = {loading:false}, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
