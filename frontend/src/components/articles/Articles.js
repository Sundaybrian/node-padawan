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

const Articles = () => {
  const context = useContext(ArticleContext);
  const { articles } = context;

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas
      dolores explicabo nostrum distinctio, accusantium suscipit quibusdam
      assumenda veniam omnis neque cumque vel, eligendi culpa optio voluptate
      consequatur, nisi corporis?
    </>
  );
};

export default Articles;
