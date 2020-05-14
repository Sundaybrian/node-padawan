import React, { useContext, useState } from "react";
import AuthContenxt from "../../context/auth/authContext";
import {
  IonGrid,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";

const Login = () => {
  const context = useContext(AuthContenxt);
  const {} = context;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      <IonGrid>
        <IonRow>
          <IonCol size-sm="6" offset-sm="3">
            <IonList>
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
