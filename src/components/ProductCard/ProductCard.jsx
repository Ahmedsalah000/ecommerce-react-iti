import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/cartSlice';
import './ProductCard.css';

function ProductCard({ product }) {
    const { id, title, price, thumbnail, stock, rating } = product;

    const isInStock = stock > 0;
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart(product));
    };

    return (
        <Card className="h-100 product-card">
            <Link to={`/products/${id}`} className="text-decoration-none">
                <div className="position-relative">
                    <Card.Img
                        variant="top"
                        src={thumbnail}
                        alt={title}
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                    {!isInStock && (
                        <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
                            Out of Stock
                        </Badge>
                    )}
                    {isInStock && (
                        <Badge bg="success" className="position-absolute top-0 start-0 m-2">
                            In Stock
                        </Badge>
                    )}
                </div>

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-dark fs-6 fw-bold">
                        {title}
                    </Card.Title>

                    <div className="mb-2">
                        <div className="d-flex align-items-center">
                            <div className="star-rating me-2">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={index < Math.floor(rating) ? 'text-warning' : 'text-muted'}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <small className="text-muted">({rating})</small>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="h5 text-primary mb-0">${price}</span>
                        </div>

                        <Button
                            variant={isInStock ? "success" : "secondary"}
                            size="sm"
                            className="w-100"
                            disabled={!isInStock}
                            onClick={handleAddToCart}
                        >
                            {isInStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                    </div>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default ProductCard;
