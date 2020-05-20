import React, { useContext, useState, useEffect } from "react";
import AuthContenxt from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import {
  IonGrid,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCol,
  IonList,
  IonListHeader,
} from "@ionic/react";

const Login = (props) => {
  const context = useContext(AuthContenxt);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, clearErrors, error, isAuthenticated } = context;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      <IonGrid>
        <IonRow>
          <IonCol size-sm="6" offset-sm="3">
            <IonList>
              <IonListHeader>
                <h2>Login</h2>
              </IonListHeader>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  required
                  name="email"
                  value={user.email}
                  onIonChange={onChange}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  required
                  name="password"
                  value={user.password}
                  onIonChange={onChange}
                ></IonInput>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size-sm="6" offset-sm="3">
            <IonButton
              color="primary"
              type="submit"
              expand="block"
              fill="solid"
            >
              Login
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};

export default Login;
