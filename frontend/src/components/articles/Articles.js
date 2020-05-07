import React, { useContext } from "react";
import ArticleContext from "../../context/articles/articleContext";
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

const Articles = ({ article }) => {
  return (
    <IonItem key={article.title} button>
      <IonThumbnail slot="start">
        <img src={article.imgUrl} />
      </IonThumbnail>
      <IonLabel>
        <h2>{article.title}</h2>
        <p>{article.subtitle}</p>
      </IonLabel>
    </IonItem>
  );
};

export default Articles;
