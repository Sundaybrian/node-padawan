import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    //   icons will change later on
    <ion-toolbar color="primary">
      <ion-buttons slot="secondary">
        <ion-button>
          <ion-icon slot="icon-only" name="person-circle"></ion-icon>
        </ion-button>
        <ion-button>
          <ion-icon slot="icon-only" name="search"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button color="secondary">
          <ion-icon
            slot="icon-only"
            ios="ellipsis-horizontal"
            md="ellipsis-vertical"
          ></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>{title}</ion-title>
    </ion-toolbar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Massive Club Cast",
};
export default Navbar;
