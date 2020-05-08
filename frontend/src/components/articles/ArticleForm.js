import React, { useState, useContext } from "react";
import {
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonListHeader,
  IonButton,
} from "@ionic/react";
import ArticleContext from "../../context/articles/articleContext";

const ArticleForm = () => {
  const context = useContext(ArticleContext);
  const [article, setArticle] = useState({
    title: "",
    subtitle: "",
    content: "",
    imgUrl: "",
  });

  const { title, subtitle, content, imgUrl } = article;

  const onChange = (e) => {
    console.log(e.target.name);
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    context.createArticle(article);
  };

  return (
    <form onSubmit={onSubmit}>
      <IonListHeader>
        <IonLabel>Create Article</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel position="floating">Title</IonLabel>
        <IonInput
          //   placeholder="enter article title"
          type="text"
          name="title"
          required
          value={title}
          onIonChange={onChange}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Subtitle</IonLabel>
        <IonInput
          //   placeholder="enter article subtitle"
          type="text"
          name="subtitle"
          required
          value={subtitle}
          onIonChange={onChange}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Content</IonLabel>
        <IonInput
          //   placeholder="enter article content"
          type="text"
          name="content"
          required
          value={content}
          onIonChange={onChange}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">ImageUrl</IonLabel>
        <IonInput
          //   placeholder="enter article image"
          type="text"
          name="imgUrl"
          required
          value={imgUrl}
          onIonChange={onChange}
        ></IonInput>
      </IonItem>
      <IonButton type="submit" color="primary" fill="outline" expand="block">
        Create Article
      </IonButton>
    </form>
  );
};

export default ArticleForm;
