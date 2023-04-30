import React from "react";
import FormContact from "./FormContact";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <GoogleMap />
          </div>
          <FormContact/>
        </div>
      </div>
    </>
  );
};

export default Contact;
