import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import {} from "@ionic/react";

const Alerts = () => {
  const context = useContext(AlertContext);
  const { alerts } = context;
  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <IonToast
        key={alert.id}
        // isOpen={showToast2}
        // onDidDismiss={() => setShowToast2(false)}
        message={alert.msg}
        position="top"
        color={alert.type}
        buttons={[
          {
            text: "Done",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      />
    ))
  );
};

export default Alerts;
