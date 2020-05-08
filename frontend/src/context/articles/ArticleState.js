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
} from "../types";

const ArticleState = (props) => {
  const initialState = {
    // use dummy articles for now
    articles: [
      {
        _id: 1,
        title: "lorem 1",
        subtitle: "lorem 2 sub",
        content: "lorem lorem dfkjdbfkjskfhskdhfjkjsfjk",
        imgUrl:
          "https://media.gettyimages.com/photos/pierreemerick-aubameyang-of-arsenal-and-team-mates-granit-xhaka-and-picture-id1174851873?s=612x612",
      },
      {
        _id: 2,
        title: "lorem 2",
        subtitle: "lorem 2 sub",
        content: "lorem lorem dfkjdbfkjskfhskdhfjkjsfjk",
        imgUrl:
          "https://media.gettyimages.com/photos/pierreemerick-aubameyang-of-arsenal-and-team-mates-granit-xhaka-and-picture-id1174851873?s=612x612",
      },
      {
        _id: 3,
        title: "lorem 3",
        subtitle: "lorem 2 sub",
        content: "lorem lorem dfkjdbfkjskfhskdhfjkjsfjk",
        imgUrl:
          "https://media.gettyimages.com/photos/pierreemerick-aubameyang-of-arsenal-and-team-mates-granit-xhaka-and-picture-id1174851873?s=612x612",
      },
      {
        _id: 4,
        title: "lorem 4",
        subtitle: "lorem 2 sub",
        content: "lorem lorem dfkjdbfkjskfhskdhfjkjsfjk",
        imgUrl:
          "https://media.gettyimages.com/photos/pierreemerick-aubameyang-of-arsenal-and-team-mates-granit-xhaka-and-picture-id1174851873?s=612x612",
      },
    ],
    filteredArticles: [],
    currentArticle: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(ArticleReducer, initialState);

  // Actions Below here
  // create article
  const createArticle = (article) => {
    // gen random id
    article._id = v4();
    // dispatching to the reducer to change state
    dispatch({
      type: ADD_ARTICLE,
      payload: article,
    });
  };

  // update article
  const editArticle = (article) => {
    dispatch({
      type: UPDATE_ARTICLE,
      payload: article,
    });
  };

  // delete article
  const deleteArticle = (id) => {
    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
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
  const clearCurrent = (article) => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };
  // filter article
  // clear filter
  // search articles

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        filteredArticles: state.filteredArticles,
        currentArticle: state.currentArticle,
        loading: state.loading,
        createArticle,
        deleteArticle,
        editArticle,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
