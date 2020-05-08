import React from "react";
import {
  IonItem,
  IonThumbnail,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { trashBinOutline, pencilOutline } from "ionicons/icons";

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
      <IonButton slot="end">
        <IonIcon slot="icon-only" icon={trashBinOutline} />
      </IonButton>
      <IonButton slot="end">
        <IonIcon slot="icon-only" icon={pencilOutline} />
      </IonButton>
    </IonItem>
  );
};

export default ArticleItem;
