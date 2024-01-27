import React, {useState} from 'react'
import './Carousel.css';
import { images } from "../Helpers/CarouselData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div 
        className="carouselInner" 
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div 
            className="left" 
            onClick={() => {
               currImg > 0 && setCurrImg(currImg - 1);
            }}
        >
            <FaArrowLeft style={{ fontSize: 30 }} />
        </div>
        <div className="center"></div>
        <div className="right"
             onClick={() => {
                currImg < images.length -1 && setCurrImg(currImg + 1);
             }}
        >
            <FaArrowRight style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  )
}

export default Carousel;
