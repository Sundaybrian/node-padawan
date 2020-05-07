import React, { useReducer } from "react";
// import axios from axios;
// import uuid from uuid;
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
    article: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(ArticleReducer, initialState);

  // Actions Below here
  // create article
  const createArticle = (obj) => {};
  // update article
  // delete article
  // set current article
  // clear current article
  // filter article
  // clear filter
  // search articles

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        filteredArticles: state.filteredArticles,
        article: state.article,
        loading: state.loading,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
