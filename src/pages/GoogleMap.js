import React from "react";

const GoogleMap = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867250.9286021274!2d76.77476745!3d18.815426549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677398313014!5m2!1sen!2sin"
          width="600"
          height="450"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
