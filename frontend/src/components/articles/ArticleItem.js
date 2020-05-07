import React from "react";
import { IonItem, IonThumbnail, IonLabel } from "@ionic/react";

const ArticleItem = ({ article }) => {
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

export default ArticleItem;
