import React, { useEffect, useState } from "react";
import { getContentById } from "../../redux/Action/contentAction";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar1";
import { postFavorite } from "../../redux/Action/userAction";

const VideoContent = () => {
  useEffect(() => {
    document.title = "Content Video";
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.content.video);
  const token = localStorage.getItem("token");
  const history = useHistory();


  useEffect(() => {
    dispatch(getContentById(token, id));
  }, [dispatch, token, id]);

  console.log("ini video =>", videos.video);

  return (
    <>
      
      <div className="content-video-jumbotron">
        <Navbar />
      </div>
      <div className="content-video-container">
        <h3>Your Videos Workout</h3>

        {videos.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {videos.video.map((video, i) => (
              <div key={i} className="content-video-card">
                <div className="video-card-long">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoUrl}/0.jpg`}
                    alt=""
                  />
                  <p>{video.time} seconds</p>
                  <div className="button-play-video">
                    <h6 onClick={() => history.push(`video/${video.videoUrl}`)}>
                      Play
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default VideoContent;
