import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="text-center">
                        <Card.Body className="py-5">
                            <h1 className="display-1 text-muted">404</h1>
                            <h3 className="mb-4">Page Not Found</h3>
                            <p className="text-muted mb-4">
                                The page you are looking for might have been removed,
                                had its name changed, or is temporarily unavailable.
                            </p>
                            <Button as={Link} to="/" variant="primary" size="lg">
                                Go Back Home
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;