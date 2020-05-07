import React, { useContext } from "react";
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
  const { articles } = context;
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Articles</IonLabel>
      </IonListHeader>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </IonList>
  );
};

export default Articles;
