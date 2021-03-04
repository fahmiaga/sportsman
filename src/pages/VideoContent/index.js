import React, { useEffect, useState } from "react";
import { getContentById } from "../../redux/Action/contentAction";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar1";

const VideoContent = () => {
  useEffect(() => {
    document.title = "Content Video";
  }, []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.content.video);
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    dispatch(getContentById(token, id));
  }, [dispatch, token, id]);

  console.log("ini video", video);

  return (
    <>
      <div className="content-video-jumbotron">
        <Navbar />
      </div>
      <div className="content-video-container">
        <h3>Your Videos Workout</h3>

        {video.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {video.map((video, i) => (
              <div key={i} className="content-video-card">
                <div className="video-card-long">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKuoUSuwQc_AqL2M3VnUJv4O4jP0-5fwMKw&usqp=CAU"
                    alt=""
                  />
                  <p>{video}</p>
                  <div class="button-play-video">
                    <h6 onClick={() => history.push(`video/${video}`)}>Play</h6>
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
