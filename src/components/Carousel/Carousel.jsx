import axios from "axios";
import React, {useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {img_300, noPicture} from "../../config/config";
import style from "./Carousel.module.css";

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({id, media_type}) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => {
    const imgUrl = c.profile_path ? `${img_300}${c.profile_path}` : noPicture;
    return (
      <div className={style.carouselItem}>
        <img
          src={imgUrl}
          alt={c.name}
          onDragStart={handleDragStart}
          className={style.carouselItem__img}
        />
        <b className="carouselItem__txt">{c.name}</b>
      </div>
    )
  });
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setCredits(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;
