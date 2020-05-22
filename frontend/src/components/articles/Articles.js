import React, { useContext, useEffect } from "react";
import ArticleContext from "../../context/articles/articleContext";
import ArticleItem from "./ArticleItem";
import Spinner from "../layout/Spinner";
import {
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonList,
  IonContent,
  IonListHeader,
  IonThumbnail,
  IonLabel,
  IonPage,
  IonCard,
  IonRow,
  IonCol,
} from "@ionic/react";

const Articles = () => {
  const context = useContext(ArticleContext);
  const { articles, filteredArticles, loadArticles, loading } = context;

  useEffect(() => {
    // add articles to state on component mountS
    loadArticles();
  }, []);

  if (contacts !== null && contacts.length == 0 && !loading) {
    <IonLabel>Please add a contact</IonLabel>;
  }

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Articles</IonLabel>
      </IonListHeader>
      {articles !== null && !loading ? (
        <>
          {filteredArticles !== null
            ? filteredArticles.map((article) => (
                <ArticleItem key={article.id} article={article} />
              ))
            : articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
              ))}
        </>
      ) : (
        <Spinner />
      )}
    </IonList>
  );
};

export default Articles;
