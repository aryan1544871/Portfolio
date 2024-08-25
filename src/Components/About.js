import React from "react"; 
import photo from "../PortfolioImg.png";



export default function About(props) {
  return (
    <>
      <div id="about">
        <div
          className="container rounded col-xxl-8 px-4 py-5 transition"
          style={props.Style}
        >
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-8 col-sm-6 col-lg-6 align-items-center">
              <img
                style={{
                  borderRadius: "100%",
                  opacity: 0.95,
                  border: "0.5px solid white",
                }}
                src={photo}
                className="d-block mx-lg-auto img-fluid"
                alt="Portfolio Image"
                width="300"
                height="300"
                loading="lazy"
              />
            </div>
            <div className="col-8 col-sm-6 col-lg-6 px-3 align-items-center">
              <h3 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">
                {props.title}
              </h3>
              <strong>
                <p className="lead ">{props.details}</p>
              </strong>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href= "https://drive.google.com/file/d/1VfPLsgLXhHeqVsieYGyQ0rG8vsDEa7Be/view?usp=drivesdk"> <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4 my-2"
                  
                >
                   Resume
                </button></a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}