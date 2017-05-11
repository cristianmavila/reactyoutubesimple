import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  return (
    <li style={styles.link} className="demo-card-wide mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp" onClick={() => onVideoSelect(video)}>
      <div>
        <div>
          <img className="mdl-cell mdl-cell--12-col" src={video.snippet.thumbnails.high.url} />
        </div>
        <div className="mdl-card__supporting-text">
          <h5>{video.snippet.title}</h5>
        </div>
      </div>
    </li>
  );
}

const styles = {
  link: {
    cursor: 'pointer'
  }
}

export default VideoListItem;
