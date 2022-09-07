import React, {useState, useRef} from 'react'
import Image from 'next/image'
import jump from '../../../public/audio/jump.mp3'
import choose from '../../../public/audio/chooseSound.mp3'

const Generation = () =>{
    const imageNames = [1,2,3,4,5]
    //references 
    const JumpAudioPlayer = useRef()
    const ChoseAudioPlayer = useRef()

    const togglePlay= () =>{
        ChoseAudioPlayer.current.play()
        // Problem with click button and here sound
    }

    const hoverPlay= () =>{
        JumpAudioPlayer.current.pause()
        JumpAudioPlayer.current.load()
        JumpAudioPlayer.current.play()
    }

    const outPlay= () =>{
        JumpAudioPlayer.current.load()
    }

    return (
        <div className="generations .simple-pixel-border-with-out-hover">
            <h1>Choose the generation</h1>
            <div className='flex flex-j-c'>
                {imageNames.map((image, i) => 
                <section key={i}  className='generation flex' onMouseOver={hoverPlay} onMouseOut={outPlay} onClick={togglePlay} >
                    <audio ref={JumpAudioPlayer} src={jump} preload="metadata"></audio>
                    <audio ref={ChoseAudioPlayer} src={choose} preload="metadata"></audio>
                    <div className='img'>
                        <Image src={require(`../../../public/img/trainer/${image}.png`)} alt={`generation ${image}`} width='35px' height = '35px'/>
                    </div>
                    <h2>G{image}</h2>
                </section>)}
            </div>
        </div>
    )
}

export default Generation;