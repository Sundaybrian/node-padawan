import React, { useState, useContext, useEffect } from "react";
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
  const { currentArticle, createArticle, editArticle, clearCurrent } = context;

  useEffect(() => {
    // check for the exitense of currentArticle
    if (currentArticle !== null) {
      setArticle(currentArticle);
    } else {
      // set to default state
      setArticle({
        title: "",
        subtitle: "",
        content: "",
        imgUrl: "",
      });
    }
  }, [ArticleContext, currentArticle]);

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
    if (currentArticle) {
      // if currentarticle we are editing
      editArticle(article);
      clearCurrent();
    } else {
      // create a new article
      createArticle(article);
    }
    // empty form after submit
    setArticle({
      title: "",
      subtitle: "",
      content: "",
      imgUrl: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <IonListHeader>
        <IonLabel>
          {" "}
          {currentArticle ? "Edit Article" : "Create Article"}
        </IonLabel>
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
      <IonButton
        type="submit"
        color={currentArticle ? "secondary" : "primary"}
        fill={currentArticle ? "outline" : "solid"}
        expand="block"
      >
        {currentArticle ? "Edit Article" : "Create Article"}
      </IonButton>
      {/*  conditonally render the clear current button */}
      {currentArticle && (
        <IonButton
          type="button"
          color={currentArticle ? "tertiary" : "primary"}
          expand="block"
          fill="solid"
          onClick={() => clearCurrent()}
        >
          Clear Current
        </IonButton>
      )}
    </form>
  );
};

export default ArticleForm;
