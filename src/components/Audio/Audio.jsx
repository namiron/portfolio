import React from 'react'
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import music from '../music/24907411.mp3'

const Audio = () => {
    //-------------------------------
    const [loop, setLoop] = React.useState(false);
    const audioRef = React.useRef(null);
    const volume = 0.5;

    React.useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            audio.loop = loop;
            if (loop) {
                audio.play().catch(error => {
                    console.log(error);
                });
            } else {
                audio.pause();
            }
        }
    }, [loop]);
    //-------------------------------

    return (
        <div onClick={() => setLoop(!loop)}>
            {loop ? <FaVolumeHigh style={{ fontSize: '20px' }} /> : <FaVolumeXmark style={{ fontSize: '20px' }} />}
            <audio ref={audioRef} src={music} />
        </div>
    );
};

export default Audio;
