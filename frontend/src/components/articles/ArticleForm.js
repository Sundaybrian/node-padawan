import React, { useState } from "react";
import {
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonListHeader,
  IonButton,
} from "@ionic/react";

const ArticleForm = () => {
  const [contact, setContact] = useState({
    title: "",
    subtitle: "",
    content: "",
    imageUrl: "",
  });

  const { title, subtitle, content, imageUrl } = contact;
  const onChange = (e) => {
    console.log(e, e.target.name);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <form>
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Image</IonLabel>
        <IonInput
          //   placeholder="enter article image"
          type="text"
          name="imageUrl"
          required
          value={imageUrl}
          onChange={onChange}
        ></IonInput>
      </IonItem>
      <IonButton type="submit" color="primary" fill="outline" expand="block">
        Create Article
      </IonButton>
    </form>
  );
};

export default ArticleForm;
