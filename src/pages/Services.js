import React from "react";
import Service1 from '../images/service.png'
import { services } from "../components/Servicese";

const Services = (props) => {
  return (
    <div className="container-xxl services">
      <div className="col-12 p-3">
        <div className="d-flex align-items-center justify-content-between">
          
            {services?.map((i, j)=>{
              return(
                <div className="d-flex align-items-center gap-10" key={j}>
                <img src={Service1} alt="" />
            <div >
              <h5>{i.title}</h5>
              <p className="mb-0">{i.tagline}</p>
            </div>
            </div>
            )

            })}
          </div>
      </div>
    </div>
  );
};

export default Services;
