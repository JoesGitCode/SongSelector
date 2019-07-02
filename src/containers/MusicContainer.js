import React, {Component} from 'react'

class MusicContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            music: [],
            currentSelectedSong: null
        }
    }
}

export default MusicContainer