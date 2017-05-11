import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  const styles = {
    iframe: {
      minHeight: 600
    }
  };

  return (
    <div className="demo-card-wide mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
      <div>
        <iframe style={styles.iframe} src={url}></iframe>
      </div>
      <div className="mdl-card__supporting-text">
        <h1>{video.snippet.title}</h1>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
