import React, {useState, useRef} from 'react'
import chooseSound from './chooseSound.mp3'

const AudioPlayer = () =>{
    //state
    const [play, setPlay] = useState(false)

    //references 
    const audioPlayer = useRef()

    const togglePlay= () =>{
        setPlay(!play)
        play?audioPlayer.current.play():audioPlayer.current.stop()
    }
    return(
        <div onMouseOver={togglePlay} onClick={togglePlay}>
            <audio ref={audioPlayer} src={chooseSound} preload="metadata"></audio>
        </div>
    )
}

export default AudioPlayer