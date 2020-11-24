import React from "react";

function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.about}</p>
      <a href={props.link} className="btn btn-primary">Check it out here!</a>
    </div>
  </div>
  );
}

export default Card;
