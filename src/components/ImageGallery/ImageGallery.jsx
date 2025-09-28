import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function ImageGallery({ images, title }) {
    const [selectedImage, setSelectedImage] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="text-center">
                <img
                    src="https://via.placeholder.com/500x400?text=No+Image"
                    alt={title}
                    className="img-fluid rounded"
                />
            </div>
        );
    }

    return (
        <div>
            <Row>
                <Col>
                    <div className="main-image-container mb-3">
                        <img
                            src={images[selectedImage]}
                            alt={title}
                            className="img-fluid rounded shadow"
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        />
                    </div>
                </Col>
            </Row>

            {images.length > 1 && (
                <Row>
                    <Col>
                        <div className="d-flex gap-2 flex-wrap">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${title} ${index + 1}`}
                                    className={`thumbnail-image rounded ${selectedImage === index ? 'border border-primary border-3' : 'border'}`}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                        opacity: selectedImage === index ? 1 : 0.7
                                    }}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default ImageGallery;