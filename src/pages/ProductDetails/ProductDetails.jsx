import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Badge, Card, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import axios from 'axios';
import { addToCart } from '../../store/cartSlice';

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    const fetchProductDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch product details. Please try again.');
            console.error('Error fetching product details:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= (product?.stock || 1)) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (quantity > product.stock) {
            alert('الكمية المطلوبة أكبر من المخزون المتاح!');
            return;
        }
        dispatch(addToCart({ ...product, quantity }));
        alert(`تم إضافة ${quantity} من ${product.title} إلى السلة!`);
    };

    const handleBuyNow = () => {
        console.log('Buy now:', { product, quantity });
        // Buy now logic will be implemented later
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    if (!product) {
        return (
            <Container className="mt-4">
                <Alert variant="warning">Product not found.</Alert>
            </Container>
        );
    }

    const isInStock = product.stock > 0;

    return (
        <Container className="mt-4">
            <Row>
                <Col lg={6}>
                    <ImageGallery images={product.images} title={product.title} />
                </Col>

                <Col lg={6}>
                    <div className="ps-lg-4">
                        <h1 className="mb-3">{product.title}</h1>

                        <div className="mb-3">
                            <div className="d-flex align-items-center mb-2">
                                <div className="star-rating me-2">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={index < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}
                                            style={{ fontSize: '1.2rem' }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="text-muted">({product.rating})</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-primary">${product.price}</h2>
                            {product.discountPercentage > 0 && (
                                <div>
                                    <span className="text-muted text-decoration-line-through me-2">
                                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <Badge bg="danger">{product.discountPercentage}% OFF</Badge>
                                </div>
                            )}
                        </div>

                        <Card className="mb-4">
                            <Card.Body>
                                <h5>More Information</h5>
                                <Row>
                                    <Col sm={6}>
                                        <strong>Category:</strong> {product.category}
                                    </Col>
                                    <Col sm={6}>
                                        <strong>Brand:</strong> {product.brand || 'N/A'}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-3">
                                <span className="me-3">Quantity:</span>
                                <div className="quantity-controls d-flex align-items-center">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => handleQuantityChange(-1)}
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </Button>
                                    <span className="mx-3 fw-bold">{quantity}</span>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => handleQuantityChange(1)}
                                        disabled={quantity >= product.stock}
                                    >
                                        +
                                    </Button>
                                </div>
                                <span className="ms-3 text-muted">
                                    Only {product.stock} items left!
                                </span>
                            </div>

                            <div className="d-grid gap-2 d-md-flex">
                                <Button
                                    variant="success"
                                    size="lg"
                                    className="me-md-2 flex-fill"
                                    disabled={!isInStock}
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </Button>
                                <Button
                                    variant="outline-success"
                                    size="lg"
                                    className="flex-fill"
                                    disabled={!isInStock}
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h3>Product Description</h3>
                    <p className="lead">{product.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
