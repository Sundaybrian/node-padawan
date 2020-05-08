import React, { useContext } from "react";
import ArticleContext from "../../context/articles/articleContext";
import {
  IonItem,
  IonThumbnail,
  IonLabel,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { trashBinOutline, pencilOutline } from "ionicons/icons";

const ArticleItem = ({ article }) => {
  const context = useContext(ArticleContext);
  const { deleteArticle, setCurrent, clearCurrent } = context;

  const onDelete = () => {
    // pass article id
    deleteArticle(article._id);
    // clear the currentarticle
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(article);
  };

  return (
    <IonItem key={article.title} button>
      <IonThumbnail slot="start">
        <img src={article.imgUrl} />
      </IonThumbnail>
      <IonLabel>
        <h2>{article.title}</h2>
        <p>{article.subtitle}</p>
      </IonLabel>
      <IonButton slot="end" onClick={onDelete}>
        <IonIcon slot="icon-only" icon={trashBinOutline} />
      </IonButton>
      <IonButton slot="end" onClick={onEdit}>
        <IonIcon slot="icon-only" icon={pencilOutline} />
      </IonButton>
    </IonItem>
  );
};

export default ArticleItem;
