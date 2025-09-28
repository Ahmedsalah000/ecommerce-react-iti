import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    if (cartItems.length === 0) {
        return (
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className="text-center py-5">
                                <h3>Your cart is empty</h3>
                                <p className="text-muted mb-4">Add some products to get started!</p>
                                <Button variant="primary" as={Link} to="/products">
                                    Continue Shopping
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

    const grandTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2 className="mb-4">Shopping Cart</h2>
                    <Card>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={`cart-item-${item.id}`}>
                                            <td>
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                />
                                                <span className="ms-2">{item.title}</span>
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </Button>
                                                <Badge bg="secondary" className="mx-2">{item.quantity}</Badge>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                                >
                                                    +
                                                </Button>
                                            </td>
                                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                >
                                                    Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div className="d-flex justify-content-end mt-3">
                                <h4>Total: ${grandTotal.toFixed(2)}</h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
