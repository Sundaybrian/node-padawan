import React, { useContext } from "react";
import ArticleForm from "../components/articles/ArticleForm";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import Articles from "../components/articles/Articles";

const Home = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6">
          <ArticleForm />
        </IonCol>
        <IonCol size="6">
          <Articles />;
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
