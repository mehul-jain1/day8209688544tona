import React, { useState, useEffect } from "react";
import Details from "./Details";
import Carousel from "./Carousel";
import apiServices from "../../services/applicationTab";
import {IMAGE_LIST_URL} from "../../helpers/appConstants";
import {IMAGE_DETAILS_URL} from "../../helpers/appConstants";

const initialState = {
  imageList: [],
  imageDetails: {},
  scanResult: null
};

const ApplicationTab = () => {
  const [state, setState] = useState(initialState);

  const errorHandler = errorMessage => {
    console.log(errorMessage)
    setState(prevState=>({
      ...prevState,
      scanResult: errorMessage
    }));
  }
  const onScanClickHandler = (event, imageUrl) => {
    setState(prevState=>({
      ...prevState,
      scanResult: null
    }));

    apiServices
      .fetchWordsFromImageURL(imageUrl,{})
      .then(({ data: { scanResult } }) => {
        console.log(text);
        setState(prevState=>({
          ...prevState,
          scanResult
        }));
      })
      .catch(err => errorHandler(err.message)); 
  }

  const onImageClickHandler = (event, cardId) => {
    apiServices
      .fetchData(IMAGE_DETAILS_URL+"?id="+cardId,{})
      .then(imageDetails => {
        setState(prevState=>({
          ...prevState,
          imageDetails
        }));
      })
      .catch(err => errorHandler(err.message)); 
  }

  const fetchImageList = () => {
    apiServices
      .fetchData(IMAGE_LIST_URL,{})
      .then(imageList => {
        setState(prevState=>({
          ...prevState,
          imageList
        }));
      })
      .catch(err => errorHandler(err.message));
  };

  useEffect(() => {
    fetchImageList();
  }, []);
  
  return (
    <div id="container" >
      <Carousel 
        data={state.imageList}
        onImageClickHandler = {onImageClickHandler}
      />
      <Details {...state.imageDetails} onScanClickHandler={onScanClickHandler}/>
      <div class="alert alert-dark" role="alert">
        {state.scanResult}
      </div>
    </div>
  );
};
export default ApplicationTab;
