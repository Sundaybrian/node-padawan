import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE,
  FILTER_ARTICLE,
  CLEAR_CURRENT,
  SET_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_FILTER,
  ARTICLE_ERROR,
  LOAD_ARTICLES,
  CLEAR_ARTICLES,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case CLEAR_ARTICLES:
      return {
        ...state,
        articles: null,
        filteredArticles: null,
        currentArticle: null,
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        loading: false,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles.filter((article) => article._id != action.payload),
        ],
        loading: false,
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((article) =>
          // check if incoming aritcle matches the articles we have
          // replace with the new article
          article._id == action.payload._id ? action.payload : article
        ),
        loading: false,
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
    case FILTER_ARTICLE:
      return {
        ...state,
        filteredArticles: state.articles.filter((article) => {
          // return all title case insensitive that match the query
          const regex = new RegExp(`${action.payload}`, "gi");
          return article.title.match(regex);
        }),
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredArticles: null,
      };
    default:
      return state;
  }
};
