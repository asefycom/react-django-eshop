import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { fetchProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    useEffect(() => {
        dispatch(fetchProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }


    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>

            {loading ? <Loader />
                : error ? <Message variant='danger' text={error} />
                    :
                    (<Row>

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
                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty:</Col>
                                                    <Col>
                                                        <Form.Control as="select" custom value={qty} onChange={(e) => setQty(e.target.value)}>
                                                            {
                                                                [...Array(product.countInStock).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                ))
                                                            }
                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}

                                        <ListGroup.Item>
                                            <Button
                                                onClick={addToCartHandler}
                                                type="button"
                                                className="btn-block"
                                                disabled={product.countInStock === 0}>
                                                Add to Cart
                                            </Button>
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
                    </Row>)
            }

        </div>
    )
}

export default ProductScreen
