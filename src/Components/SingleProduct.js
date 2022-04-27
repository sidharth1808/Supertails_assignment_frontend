import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import './Styles.css'

const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
        <Card>
            <Card.Img variant="top" src={prod.image} alt={prod.name} />
            <Card.Body>
                <Card.Title>{prod.name }</Card.Title>
                <Card.Subtitle className='subtitle'>
                    <span>{prod.brand}</span>
                    <span>{prod.category}</span>

                    <span> ₹ {prod.price.split(".")[0]}</span>
                </Card.Subtitle>
                <Rating rating={prod.ratings} />
                <Button className='cartButton'>Add to cart</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct