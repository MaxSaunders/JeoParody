import { Col, Card } from 'react-bootstrap'

import * as translations from '../Assets/translations'
import './index.css'

const HeaderCell = ({ category }) =>
    <Col>
        <Card className='text-light fw-bold mb-3 px-2 py-4 col-header bg-primary'>
            {translations[category]}
        </Card>
    </Col>

export default HeaderCell
