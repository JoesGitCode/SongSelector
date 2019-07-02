import React, {Component, Fragment} from 'react'
import SongSelector from '../components/SongSelector';
import SongDetails from '../components/SongDetails';

class MusicContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            musics: [],
            currentSelectedSong: null
        }
        this.handleMusicSelected = this.handleMusicSelected.bind(this)
    }

    componentDidMount(){
        const url="https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
        fetch(url)
            .then(res => res.json())
            .then(musics => this.setState({musics: musics}))
            .catch(err => console.error)
    }

    handleMusicSelected(index){
        
        const selectedSong = this.state.musics.feed.entry[index]['im:name'].label
        this.setState({currentSelectedSong: selectedSong})
        console.log("whatis this", currentSelectedSong);

    }

    render(){
        return(
            <Fragment>
                <h1>Top 20 Songs</h1>
                <SongSelector
                    music = {this.state.musics}
                    onMusicSelected={this.handleMusicSelected}
                />
                <SongDetails song={this.state.currentSelectedSong}/>
            </Fragment>
        )


    }
}

export default MusicContainer