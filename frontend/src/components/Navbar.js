import React, { useContext, useEffect } from "react";
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
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import ArticleContext from "../context/articles/articleContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const articleContext = useContext(ArticleContext);

  const { logout, isAuthenticated, user } = authContext;
  const { setAlert } = alertContext;
  const { clearArticles } = articleContext;

  const onLogout = () => {
    logout();
    // clear articles on logout
    clearArticles();
  };

  const authLinks = (
    <>
      <IonButtons slot="secondary">
        <IonButton href="/">
          <IonIcon slot="start" icon={home} />
          <IonLabel>{user && user.name}</IonLabel>
        </IonButton>
        <IonButton href="/about">
          <IonIcon slot="icon-only" icon={helpOutline} />
        </IonButton>
        <IonButton color="light" onClick={onLogout}>
          Logout
        </IonButton>
      </IonButtons>
    </>
  );

  const guestLinks = (
    <>
      <IonButtons slot="primary">
        <IonButton color="light" href="/register">
          Register
        </IonButton>
        <IonButton color="light" href="/login">
          Login
        </IonButton>
      </IonButtons>
    </>
  );

  return (
    //   icons will change later on
    <IonToolbar color="primary">
      {isAuthenticated ? authLinks : guestLinks}
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
