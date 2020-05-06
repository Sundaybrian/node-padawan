import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle color="secondary">Card Subtitle</IonCardTitle>
          <IonCardSubtitle>Card Title</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default Home;
