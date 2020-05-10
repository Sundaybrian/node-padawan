import React, { useContext, useEffect, useRef } from "react";
import ArticleContext from "../../context/articles/articleContext";
import { IonList, IonItem, IonLabel, IonInput } from "@ionic/react";

const ArticleFilter = () => {
  const context = useContext(ArticleContext);
  const { filterArticle, clearArticle, filteredArticles } = context;
  const query = useRef("");

  useEffect(() => {
    // set query to empty if not filtered array

    if (filteredArticles === null) {
      query.current.value = "";
    }
  });

  const onChange = (e) => {
    if (query.current.value !== "") {
      filterArticle(e.target.value);
    } else {
      // if no search empty the filteredArticles array
      clearArticle();
    }
  };

  return (
    <form>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Search...</IonLabel>
          <IonInput
            onIonChange={onChange}
            name="query"
            ref={query}
            type="text"
          ></IonInput>
        </IonItem>
      </IonList>
    </form>
  );
};

export default ArticleFilter;
