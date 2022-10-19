import StoreItem from '../../components/StoreItem'
import {storeItems} from "../../components/data/items"
import "./store.scss"
import { Row, Col } from "react-bootstrap"


export const Store = () => {
  
  return (
    <>
    <h1 className=''>Store</h1>
    <Row md={2} xs={1} lg={3} className='store-container g-3'>
        {
          storeItems.map((item, index) => {
            return (
              <Col key={index} className=''>
                <StoreItem {...item} />
              </Col>
            )
          })
        }
    </Row>
    </>
  )
}
