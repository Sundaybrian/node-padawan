import React, { useContext, useEffect, useRef } from "react";
import ArticleContext from "../../context/articles/articleContext";
import { IonList, IonItem, IonLabel, IonInput } from "@ionic/react";

const ArticleFilter = () => {
  const context = useContext(ArticleContext);
  const { filterArticle } = context;

  const onChange = (e) => {
    // call filterArticle
    filterArticle(e.target.value);
  };

  return (
    <form>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Search</IonLabel>
          <IonInput onIonChange={onChange} ref={query} type="text"></IonInput>
        </IonItem>
      </IonList>
    </form>
  );
};

export default ArticleFilter;
