import React from 'react'

const SongDetails = ({song}) => {
    return(
        <div>
            {song['im:name'].label}
        </div>
    )

}

export default SongDetails