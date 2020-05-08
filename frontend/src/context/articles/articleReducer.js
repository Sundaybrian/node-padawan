import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE,
  FILTER_ARTICLE,
  CLEAR_CURRENT,
  SET_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles.filter((article) => article._id != action.payload),
        ],
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentArticle: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentArticle: null,
      };
    default:
      return state;
  }
};
