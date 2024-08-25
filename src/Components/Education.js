import React from 'react';

export default function Education(props) {
  const Details = (elements) => {
    return elements.map((e) => <li>{e}</li>);
  }

  return (
    <div id = "education">
      <div className="container rounded py-5 my-2 " style={props.Style}>
        <h2 className="display-6 fw-bold text-body-emphasis text-center">{props.title}</h2>
        <div className="col-lg-6 mx-2 item-center">
          <ul className="lead mb-4"> 
            {Details(props.details)}
          </ul>
        </div>
      </div>
    </div>
  )
}