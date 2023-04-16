import { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "react-bootstrap"

import { KEY_ORIGINAL, KEY_LYRICS, KEY_INSTRUMENTAL, KEY_DOUBLE_UP } from '../Assets/constants'
import Lyrics from './Lyrics'
import Video from './Video'
import './index.css'

const QuestionBody = ({ question, category }) => {
    switch (category) {
        case KEY_LYRICS:
            return <Lyrics lyrics={question[category]} />
        case KEY_ORIGINAL:
            return <Video url={question[category]} />
        case KEY_INSTRUMENTAL:
            return <Video url={question[category]} />
        case KEY_DOUBLE_UP:
            return <Video url={question[category]} />
    }
}

const QuestionModalBody = ({ question, showQuestion, setShowQuestion, setIsAnswered, category, showAnswer, setShowAnswer, exitQuestion }) => {
    const onKeyDown = (event) => {
        if (showQuestion) {
            if (event.keyCode == '27') {
                event.preventDefault()
                exitQuestion()
            }

            if (event.keyCode == '32') {
                event.preventDefault()
                setShowAnswer(true)
                setIsAnswered(true)
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown])

    const { name } = question

    return (
        <>
            <ModalHeader>
                <Button onClick={exitQuestion} variant='secondary'>
                    Close - ESC
                </Button>
                {!showAnswer &&
                    <Button variant='primary'>
                        Reveal Answer - SPC
                    </Button>
                }
            </ModalHeader>
            <ModalBody className='d-flex justify-content-center'>
                <div className='d-flex justify-content-center fs-5'>
                    <QuestionBody question={question} category={category} />
                </div>
            </ModalBody>

            {showAnswer &&
                <ModalFooter className='d-flex justify-content-center fs-5'>
                    {name}
                </ModalFooter>
            }
        </>
    )
}

const Question = ({ question, showQuestion, setShowQuestion, setIsAnswered, category }) => {
    const exitQuestion = () => setShowQuestion(false)
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <Modal show={showQuestion} centered>
            <QuestionModalBody
                question={question}
                showQuestion={showQuestion}
                setShowQuestion={setShowQuestion}
                setIsAnswered={setIsAnswered}
                category={category}
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
                exitQuestion={exitQuestion}
            />
        </Modal>
    )
}

export default Question
