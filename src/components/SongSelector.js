import React, {Fragment} from 'react'
import SongDetails from './SongDetails';

const SongSelector = (props) => {
    console.log("dfsfd", props)
    if(props.music.length == 0) return null

            const options = props.music.feed.entry.map((song, index) => {
                return <option value = {index}>{index + 1}: {song['im:name'].label}</option>
            
            }
        
    )

    function handleChange(event){
        props.onMusicSelected(event.target.value)
        console.log("value?", event.target.value);
        
    }


    return(
        <select id="musicSelector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Select a Song</option>
            {options}
        </select>
        // <Fragment>
        //     <SongDetails/>
        // </Fragment>
    )

    
}

export default SongSelector