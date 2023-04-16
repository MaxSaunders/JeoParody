import { Container, Row, Col } from 'react-bootstrap'
import { useCallback, useEffect, useState } from 'react'

import { CATEGORIES } from '../Assets/constants'
import songs from '../Assets/songs'
import BoardCell from './BoardCell'
import HeaderCell from './HeaderCell'
import { getRandomInt } from '../Utils/numbers'
import './index.css'

const useGetCategories = () => {
    const [categories, setCategories] = useState([])

    const getCategories = useCallback(() => {
        const temp = [0, 1, 1, 2, 3]
        // const temp = []
        // for (let i = 0; i < 5; i++) {
        //     temp.push(getRandomInt(4))
        // }
        return temp.sort()?.map(i => CATEGORIES[i])
    }, [CATEGORIES, getRandomInt])

    useEffect(() => {
        setCategories(getCategories())
    }, [setCategories, getCategories])

    return categories
}

const BoardRow = ({ RowInfo, category }) =>
    <Col className='mb-2'>
        <HeaderCell category={category} />
        {RowInfo.map((item, index) =>
            <BoardCell {... { item, cellKey: index, key: index, category }} />
        )}
    </Col>

const Board = () => {
    const row1 = songs?.slice(0, 5) || []
    const row2 = songs?.slice(5, 10) || []
    const row3 = songs?.slice(10, 15) || []
    const row4 = songs?.slice(15, 20) || []
    const row5 = songs?.slice(20, 25) || []

    const categories = useGetCategories()

    return (
        <Container className='mt-2'>
            <Row xs={5}>
                <BoardRow RowInfo={row1} category={categories[0]} />
                <BoardRow RowInfo={row2} category={categories[1]} />
                <BoardRow RowInfo={row3} category={categories[2]} />
                <BoardRow RowInfo={row4} category={categories[3]} />
                <BoardRow RowInfo={row5} category={categories[4]} />
            </Row>
        </Container>
    )
}

export default Board
