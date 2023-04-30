import React from "react";
import Marquee from "react-fast-marquee";
import Brand01 from '../images/brand-01.png'
import Brand02 from '../images/brand-02.png'
import Brand03 from '../images/brand-03.png'
import Brand04 from '../images/brand-04.png'
import Brand05 from '../images/brand-05.png'
import Brand06 from '../images/brand-06.png'
import Brand07 from '../images/brand-07.png'
import Brand08 from '../images/brand-08.png'

const LineCarousal = () => {
  return (
    <div className="container py-3 ">
      <div className="col-12">
        <div className="marque-inner">
          <Marquee className="d-flex">
            <div className="mx-2 w-25">
              <img src={Brand01} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand02} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand03} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand04} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand05} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand06} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand07} alt="brand" />
            </div>
            <div className="mx-3 w-25">
              <img src={Brand08} alt="brand" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LineCarousal;
