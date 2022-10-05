import React from 'react';
import {img_300, unavailable} from "../../config/config";
import style from './SingleContent.module.css';
import {Badge} from "@mui/material";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={style.poster}
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className={style.title}>{title}</b>
      <span className={style.subTitle}>
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className={style.subTitle}>{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
