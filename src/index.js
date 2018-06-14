import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'
const API_KEY = 'AIzaSyCJWosae5aDx_-vShLh5G59WQ2SOr3Y49Q';
YTSearch({key: 'AIzaSyCJWosae5aDx_-vShLh5G59WQ2SOr3Y49Q', term: 'Algorithms MIT'}, function(data) {
    console.log(data)
})
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null}
            this.apiCall("algorithms");

    }

    apiCall(term) {
    YTSearch({key: 'AIzaSyCJWosae5aDx_-vShLh5G59WQ2SOr3Y49Q', term}, (videos) => {
        this.setState(
            {
               videos,
               selectedVideo: videos[0]
     })
     })
    }

    render() {
        const loadashed = _.debounce(term => {this.apiCall(term)}, 300);
        return <div><SearchBar onSearch = {loadashed} />
        <VideoDetail video={this.state.selectedVideo} />
                    <VideoList videos = {this.state.videos} onVideoSelect={video => this.setState({selectedVideo:video})}/></div>
    }
}



ReactDom.render(<App />, document.querySelector(".container"));

