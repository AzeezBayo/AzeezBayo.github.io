import { Image } from "./image";
import React from "react";

export const Private = (props) => {
  return (
    <div id="private" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Private networks</h2>
          <p>
            We collaborate with private entities helping them acquire verified clients, also helps potential clients connect to genuine businessses enabling client-privider trust.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
