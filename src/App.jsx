import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
const ProductsList = lazy(() => import('./pages/ProductsList/ProductsList'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Register = lazy(() => import('./pages/Register/Register'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
