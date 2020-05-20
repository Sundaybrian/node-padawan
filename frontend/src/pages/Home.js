import React, { useContext, useEffect } from "react";
import ArticleForm from "../components/articles/ArticleForm";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import Articles from "../components/articles/Articles";
import ArticleFilter from "../components/articles/ArticleFilter";
import AuthContext from "../context/auth/authContext";

const Home = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.loadUser();
    console.log("raaan");
  }, []);
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6">
          <ArticleForm />
        </IonCol>
        <IonCol size="6">
          <ArticleFilter />
          <Articles />;
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
