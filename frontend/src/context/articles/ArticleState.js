import React, { useReducer } from "react";
// import axios from axios;
import { v4 } from "uuid";
import ArticleContext from "./articleContext";
import ArticleReducer from "./articleReducer";
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
  CONTACT_ERROR,
  LOAD_ARTICLES,
  CLEAR_ARTICLES,
} from "../types";
import axios from "axios";

const ArticleState = (props) => {
  const initialState = {
    // use dummy articles for now
    articles: null,
    filteredArticles: null,
    currentArticle: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(ArticleReducer, initialState);

  // Actions Below here
  // get articles
  const loadArticles = async () => {
    try {
      // fetch articles
      const res = await axios.get("/api/articles");
      dispatch({
        type: LOAD_ARTICLES,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // create article
  const createArticle = async (article) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/articles/", article, config);
      // dispatching to the reducer to change state
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // update article
  const editArticle = (article) => {
    dispatch({
      type: UPDATE_ARTICLE,
      payload: article,
    });
  };

  // delete article
  const deleteArticle = async (id) => {
    try {
      const res = await axios.delete(`/api/articles/${id}`);
      dispatch({
        type: DELETE_ARTICLE,
        payload: id,
      });
    } catch (error) {}
  };

  // clear articles
  const clearArticles = () => {
    dispatch({
      type: CLEAR_ARTICLES,
    });
  };

  // set current article
  const setCurrent = (article) => {
    dispatch({
      type: SET_CURRENT,
      payload: article,
    });
  };
  // clear current article
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // filter article
  const filterArticle = (query) => {
    dispatch({
      type: FILTER_ARTICLE,
      payload: query,
    });
  };
  // clear filter
  const clearArticle = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
  // search articles

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        filteredArticles: state.filteredArticles,
        currentArticle: state.currentArticle,
        loading: state.loading,
        error: state.loading,
        loadArticles,
        createArticle,
        deleteArticle,
        editArticle,
        setCurrent,
        clearCurrent,
        filterArticle,
        clearArticle,
        clearArticles,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
