import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen({ match }) {


    const [product, setProduct] = useState([])
    useEffect(() => {

        async function fetchProduct() {
            const { data } = await axios.get(`/api/v1/products/${match.params.id}`)
            setProduct(data)
        }

        fetchProduct()

    }, [])

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>

            <Row>

                <Col sm={12} md={5} lg={5} xl={5}>
                    <Image src={product.image} alt={product.name} />

                </Col>
                <Col sm={12} md={7} lg={7} xl={7}>

                    <Row>

                        <Col sm={12} md={6} lg={6} xl={6} className="my-3">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h5>{product.name}</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#F8E825"} />
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col sm={12} md={6} lg={6} xl={6} className="mb-3">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                            ${product.price}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button type="button" className="btn-block" disabled={product.countInStock === 0}>Add to Card</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </Row>

                    <Row>
                        <Col className="my-3">
                            <strong>Description:</strong> {product.description}
                        </Col>

                    </Row>


                </Col>
            </Row>



        </div>
    )
}

export default ProductScreen
