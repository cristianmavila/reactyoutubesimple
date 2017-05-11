import React, { Component } from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
let API_KEY = 'AIzaSyAyaowUycJP1BqH-kVod756jom3TtCSgys'

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('skateboard');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <div className="mdl-layout mdl-js-layout">
          <SearchBar onSearchTermChange={videoSearch} />
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--8-col mdl-cell--4-col-phone">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone">
              <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'))
