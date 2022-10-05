import React from 'react';
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import style from '../ContentModal/ContentModal.module.css';
import {useEffect, useState} from "react";
import Carousel from "../Carousel/Carousel";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import {YouTube} from "@mui/icons-material";

 const ContentModal = ({children, media_type, id}) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchVideo = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(response.data.results[0].key);
  } catch (error) {
    console.log(error)
  }
};


  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);


  return (
    <>
    <div
      className={style.media}
      style={{cursor: "pointer"}}
      color="inherit"
      onClick={handleOpen}
    >
      {children}
    </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          className={style.modal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {content && (
              <div className={style.paper}>
                <div className={style.ContentModal}>
                  <img
                    src={
                      content.poster_path
                        ? `${img_500}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.name || content.title}
                    className={style.ContentModal__portrait}
                  />
                  <img
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className={style.ContentModal__landscape}
                  />
                  <div className={style.ContentModal__about}>
                  <span className={style.ContentModal__title}>
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                    {content.tagline && (
                      <i className={style.tagline}>{content.tagline}</i>
                    )}

                    <span className={style.ContentModal__description}>
                    {content.overview}
                  </span>

                    <div>
                      <Carousel id={id} media_type={media_type}/>
                    </div>

                    <Button
                      variant="contained"
                      startIcon={<YouTube/>}
                      color="secondary"
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Watch the Trailer
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Fade>
        </Modal>
    </>
  );
}

export default ContentModal;
