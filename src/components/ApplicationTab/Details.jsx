import React, { useState, useEffect } from "react";

const Details = props => {
  let features = props.features || [];

  const cardStyle = {
    display: "inline-block",
    border: "1px solid #eee",
    "box-shadow": "0 2px 2px #ccc",
    width: "auto",
    height: "auto",
    padding : "20px",
    margin: "20px",
  };

  const imgStyle = {
    width: "10rem",
    height: "auto",
    "margin-right" : "1rem",
    "max-height": "15rem"
  };
  const scanNowButton = {
    "display" :"flex",
    "justify-content":"center",
  };

  const errorHandler = errorMessage => {
    console.log(errorMessage)
  }

  features = features.map((feature, index)=>{
    return (
      <li key={index}>{feature}</li>
    )
  });

  return (
    <div style={cardStyle}>
      <div className='d-flex'>
      <img style={imgStyle} src={props.url}/>
      <div>
       <h3>{props.title}</h3>
       <span className='text-secondary'>Quantity: {props.quantity}</span> 
       <h5 className="mt-4">Description</h5> 
        <span>{props.description}</span>
      </div>
      </div>
      <h5 className="mt-4">Features:</h5>
      <ol> {props.features != undefined ? features : null} </ol>
      <div style={scanNowButton}>
        <button type="button" class="btn btn-lg btn-primary" disabled={ props.url != null ? false: true} onClick={(event) => props.onScanClickHandler(event,props.url)}>Scan Now</button> 
      </div>
    </div>
  );
};
export default Details;