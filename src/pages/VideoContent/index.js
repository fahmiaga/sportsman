import React from "react";
import { useParams } from "react-router-dom";
import { LiteYouTubeEmbed } from "react-lite-youtube-embed";

const VideoContent = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <div class="video-content-container">
        <div class="video-container">
          <LiteYouTubeEmbed
            id={id}
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
          />
        </div>
        <div class="content-sidebar">This is Sidebar</div>
      </div>
    </>
  );
};

export default VideoContent;
