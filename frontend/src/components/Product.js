import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
    return (
        <div>
            <Card className="p-3 my-3 rounded">
                <a href={`/product/${product._id}`}>
                    <Card.Img src={product.image} className="card-img-top" />
                </a>
                <Card.Body>
                    <a href={`/product/${product._id}`} >
                        <Card.Title as="h5">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </a>

                    <Card.Text as="div" className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#F8E825"} />
                    </Card.Text>

                    <Card.Text as="h3">
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
