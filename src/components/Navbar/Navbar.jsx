import React from 'react';
import { useSelector } from 'react-redux';
import { useLanguage } from '../../hooks/useLanguage.js';
import { Navbar as BootstrapNavbar, Nav, Container, Badge, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const { language, setLanguage } = useLanguage();

    return (
        <BootstrapNavbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/">
                    Products App
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/products">
                            Products
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/cart" className="position-relative">
                            <i className="bi bi-cart me-1"></i>Cart
                            {cartCount > 0 && (
                                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    {cartCount}
                                </Badge>
                            )}
                        </Nav.Link>
                        <Nav.Link href="#">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="language-dropdown">
                                {language === 'ar' ? 'العربية' : 'English'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setLanguage('en')}>
                                    English
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setLanguage('ar')}>
                                    العربية
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
