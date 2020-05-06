import React from "react";
import { Link } from "react-router-dom";
import {
  IonContent,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { personCircle, helpOutline, home } from "ionicons/icons";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    //   icons will change later on
    <IonToolbar color="primary">
      <IonButtons slot="secondary">
        <IonButton href="/">
          <IonIcon slot="icon-only" icon={home} />
        </IonButton>
        <IonButton href="/about">
          <IonIcon slot="icon-only" icon={helpOutline} />
        </IonButton>
      </IonButtons>
      <IonButtons slot="primary">
        <IonButton color="primary">
          <IonIcon
            slot="icon-only"
            ios="ellipsis-horizontal"
            md="ellipsis-vertical"
          />
        </IonButton>
      </IonButtons>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Massive Club Cast",
};
export default Navbar;
