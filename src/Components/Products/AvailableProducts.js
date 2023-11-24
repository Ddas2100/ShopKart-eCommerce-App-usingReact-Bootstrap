import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AvailableProducts.css';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
];

const AvailableProducts = () => {
    return (
        <Container >
            <Row className="mb-4">
            </Row>
            <Row className="justify-content-md-center">
                {productsArr.map((product, index) => (
                    <Col key={index} md={6} lg={6} xl={6} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <div className="zoom-effect">
                                    <Card.Img variant="top" src={product.imageUrl} />
                                </div>
                                <Card.Text>
                                    ${product.price}
                                    <Button variant="success" className='m-3'>Add to Cart</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AvailableProducts;
