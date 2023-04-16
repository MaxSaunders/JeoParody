import { Card } from 'react-bootstrap'
import { useCallback, useState } from 'react'

import Question from '../Question'
import './index.css'

const BoardCell = ({ item, cellKey, category }) => {
    const [isAnswered, setIsAnswered] = useState(false)
    const [showQuestion, setShowQuestion] = useState(false)

    const onClick = useCallback(() => {
        setShowQuestion(true)
        if (isAnswered === false) {
            setIsAnswered('mid')
        }
    }, [setShowQuestion, setIsAnswered, isAnswered])

    return (
        <>
            <Card className={`mb-3 question-card answered-${isAnswered} index=${cellKey}`} onClick={onClick}>
                <div className='text-warning text-bold cash-value'>
                    ${100 * (cellKey + 1)}
                </div>
            </Card>
            <Question
                question={item}
                category={category}
                showQuestion={showQuestion}
                setShowQuestion={setShowQuestion}
                setIsAnswered={setIsAnswered}
            />
        </>
    )
}

export default BoardCell
