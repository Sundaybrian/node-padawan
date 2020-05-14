import React, { useContext, useState } from "react";
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

const Register = () => {
  const context = useContext(AuthContenxt);
  const alertContext = useContext(AlertContext);
  const {} = context;
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // destructure from state
  const { username, email, password2, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("registered");

    setAlert("Name cannot be empty", "danger");
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      <IonGrid>
        <IonRow>
          <IonCol size-sm="6" offset-sm="3">
            <IonList>
              <IonListHeader>
                <h2>Register</h2>
              </IonListHeader>
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput
                  type="text"
                  name="username"
                  onIonChange={onChange}
                  value={username}
                  required
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="email"
                  required
                  name="email"
                  value={email}
                  onIonChange={onChange}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  required
                  name="password"
                  value={password}
                  onIonChange={onChange}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput
                  type="password"
                  required
                  name="password2"
                  value={password2}
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
              Register
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};

export default Register;
