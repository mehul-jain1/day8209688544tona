import React, { Component } from "react";
import Slider from "react-slick";
const Carousel = props => {
  const carousalImgStyle = {
    width:"10rem",
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {
          props.data.map((card)=> {
            return(
            <div>
              <img style={carousalImgStyle} src={card.url} onClick={(event) => props.onImageClickHandler(event,card.id)}/>
            </div>
            )
          })
        }
      </Slider>
    </div>
  );
}
export default Carousel;