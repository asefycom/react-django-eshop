import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="bg-dark p-3 text-light">
            <Container>
                <Row >
                    <Col>Copyright &copy; E-Shop</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
