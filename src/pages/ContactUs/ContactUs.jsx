import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-number-input';
import { Container, Row, Col, Card, Button, Alert, Form as BootstrapForm } from 'react-bootstrap';
import 'react-phone-number-input/style.css';

const ContactUs = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().optional(),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must not exceed 500 characters')
      .required('Message is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    // Simulate submit
    console.log('Form data:', values);
    setShowSuccess(true);
    resetForm();
    // Hide success after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Contact Us</Card.Title>
              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  Thank you for your message! We will get to you soon.
                </Alert>
              )}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue, errors, touched }) => (
                  <Form>
                    <Row>
                      <Col md={6}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>First Name</BootstrapForm.Label>
                          <Field
                            name="firstName"
                            as={BootstrapForm.Control}
                            isInvalid={touched.firstName && errors.firstName}
                          />
                          <ErrorMessage name="firstName" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                      </Col>
                      <Col md={6}>
                        <BootstrapForm.Group className="mb-3">
                          <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                          <Field
                            name="lastName"
                            as={BootstrapForm.Control}
                            isInvalid={touched.lastName && errors.lastName}
                          />
                          <ErrorMessage name="lastName" component="div" className="text-danger small" />
                        </BootstrapForm.Group>
                      </Col>
                    </Row>

                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Email address</BootstrapForm.Label>
                      <Field
                        name="email"
                        type="email"
                        as={BootstrapForm.Control}
                        isInvalid={touched.email && errors.email}
                      />
                      <ErrorMessage name="email" component="div" className="text-danger small" />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Phone Number (Optional)</BootstrapForm.Label>
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={values.phone}
                        onChange={(value) => setFieldValue('phone', value)}
                        className={touched.phone && errors.phone ? 'is-invalid' : ''}
                      />
                      <ErrorMessage name="phone" component="div" className="text-danger small mt-1" />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label>Message</BootstrapForm.Label>
                      <Field
                        name="message"
                        as="textarea"
                        rows={5}
                        className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                      />
                      <ErrorMessage name="message" component="div" className="text-danger small" />
                    </BootstrapForm.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
