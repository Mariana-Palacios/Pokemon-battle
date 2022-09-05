import React, {useRef} from 'react'
import Image from 'next/image'
import chooseSound from '../../../public/audio/chooseSound.mp3'

const Generation = () =>{
    const imageNames = [1,2,3,4,5]
    //references 
    const audioPlayer = useRef()

    const togglePlay= () =>{
        audioPlayer.current.play()
    }
    return (
        <div className="generations .simple-pixel-border-with-out-hover">
            <h1>Choose the generation</h1>
            <div className='flex flex-j-c '>
                {imageNames.map((image, i) => 
                <section key={i}  className='generation flex flex-f-w ' onMouseOver={togglePlay} onClick={togglePlay}>
                    <audio ref={audioPlayer} src={chooseSound} preload="metadata"></audio>
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