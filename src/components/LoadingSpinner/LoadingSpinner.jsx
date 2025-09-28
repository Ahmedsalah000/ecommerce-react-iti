import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div className="mt-3">
          <p className="text-muted">Loading...</p>
        </div>
      </div>
    </Container>
  );
}

export default LoadingSpinner;