import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import "../../assets/css/footer-jumbotron.css";
import Navbar from "../../components/Navbar2";
import { useDispatch, useSelector } from "react-redux";
import playButton from "../../assets/img/button/play-button.png";
import { getContent } from "../../redux/Action/contentAction";

const Content = () => {
  useEffect(() => {
    document.title = `Videos`;
  });

  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content.content);

  useEffect(() => {
    dispatch(getContent());
  }, []);

  const history = useHistory();

  console.log("ini content", contents);
  return (
    <>
      <Navbar />
      <div class="container-video">
        {contents.map((content, i) => (
          <div
            class="card-video"
            onClick={() => history.push(`/videos-content/${content.url}`)}
            key={i}
          >
            <img
              src={`http://img.youtube.com/vi/${content.url}/0.jpg`}
              alt=""
              className="thumbnail-video"
            />
            <div className="rect-video"></div>
            <p>{content.title}</p>
            <img src={playButton} alt="" className="play-button" />
          </div>
        ))}
      </div>

      {/* <div class="container-video">
        {data.result.map((video, i) => (
          <div
            class="card-video"
            onClick={() => history.push(`/videos-content/${video.url}`)}
            key={i}
          >
            <img
              src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
              alt=""
              className="thumbnail-video"
            />
            <div className="rect-video"></div>
            <p>{video.title}</p>
            <img src={playButton} alt="" className="play-button" />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Content;
