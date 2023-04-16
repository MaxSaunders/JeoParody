import { useMemo } from "react"
import { getRandomInt } from "../Utils/numbers"

const Lyrics = ({ lyrics = '' }) => {
    const wordArray = useMemo(() => {
        return lyrics?.split(' ')
    }, [lyrics])

    const wordCount = useMemo(() => {
        return getRandomInt(15, 8)
    }, [getRandomInt])

    const lastWordIndex = useMemo(() => {
        return getRandomInt(wordArray?.length, wordCount)
    }, [getRandomInt])

    const question = useMemo(() => {
        return wordArray?.slice(lastWordIndex - wordCount, lastWordIndex).join(' ')
    }, [wordArray, lastWordIndex, wordCount])

    return (
        <div className='py-5 px-2'>
            {question}
        </div>
    )
}

export default Lyrics
