import React from "react";
import { useHistory } from "react-router-dom";
// import "../../assets/css/footer-jumbotron.css";
import playButton from "../../assets/img/button/play-button.png";

const Content = (props) => {
  const data = {
    result: [
      {
        title: "30 minute fat burning home workout for beginners. Achievable, low impact results.",
        url: "gC_L9qAHVJ8",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Linger",
        url: "G6Kspj3OO0s",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Promises",
        url: "hUFPooqKllA",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "My Immortal",
        url: "5anLPw0Efmo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Going Under",
        url: "CdhqVtpR2ts",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Supersonic",
        url: "BJKpUH2kJQg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
      {
        title: "Zombie",
        url: "6Ejga4kJUts",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima quos vero placeat! Corrupti, accusamus maiores beatae iusto in architecto alias. Nihil assumenda eum placeat repellendus dolore. Ratione, veniam alias.",
      },
    ],
  };

  const history = useHistory();
  // const handleClick = ()=>{
  //   history.push(`/video-content/${}`)
  // }

  return (
    <>
      <div class="container-video">
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
      </div>
    </>
  );
};

export default Content;
