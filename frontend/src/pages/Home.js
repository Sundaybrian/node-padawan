import React, { useContext } from "react";
import { IonRow, IonList } from "@ionic/react";
import Articles from "../components/articles/Articles";
import ArticleContext from "../context/articles/articleContext";

const Home = () => {
  const context = useContext(ArticleContext);
  const { articles } = context;
  return (
    <IonRow>
      <IonList>
        {articles.map((article) => (
          <Articles key={article.id} article={article} />
        ))}
      </IonList>
    </IonRow>
  );
};

export default Home;
