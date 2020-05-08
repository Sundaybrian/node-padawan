import React, { useContext } from "react";
import Articles from "../components/articles/Articles";
import { IonGrid, IonRow, IonCol } from "@ionic/react";

const Home = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6"></IonCol>
        <IonCol size="6">
          <Articles />;
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
