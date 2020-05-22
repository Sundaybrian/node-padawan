import React, { useContext, useEffect } from "react";
import ArticleContext from "../../context/articles/articleContext";
import ArticleItem from "./ArticleItem";
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
  const { articles, filteredArticles, loadArticles } = context;

  useEffect(() => {
    // add articles to state
    loadArticles();
  }, []);

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Articles</IonLabel>
      </IonListHeader>
      {filteredArticles !== null
        ? filteredArticles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))
        : articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
    </IonList>
  );
};

export default Articles;
