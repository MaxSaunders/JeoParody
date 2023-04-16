import React, { useMemo } from 'react'
import ReactPlayer from 'react-player'

import { getRandomInt } from '../Utils/numbers'

const Video = ({ url }) => {
    const startTime = useMemo(() => {
        return getRandomInt(45, 5)
    }, [getRandomInt])
    const duration = useMemo(() => {
        return getRandomInt(15, 8)
    }, [getRandomInt])
    const endTime = useMemo(() => {
        return startTime + duration
    }, [startTime, duration])

    return (
        <div>
            <div className='py-5'>
                Audio Clue:
            </div>
            <ReactPlayer
                className='video-player'
                url={`${url}?autoplay=1&start=${startTime}&end=${endTime}`}
                playing
                height='1px'
                width='1px'
            />
        </div>
    )
}

export default Video
