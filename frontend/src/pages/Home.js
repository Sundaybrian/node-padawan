import React, { useContext } from "react";
import { IonRow, IonList, IonListHeader, IonLabel } from "@ionic/react";
import Articles from "../components/articles/Articles";
import ArticleContext from "../context/articles/articleContext";

const Home = () => {
  const context = useContext(ArticleContext);
  const { articles } = context;
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Articles</IonLabel>
      </IonListHeader>
      {articles.map((article) => (
        <Articles key={article.id} article={article} />
      ))}
    </IonList>
  );
};

export default Home;
