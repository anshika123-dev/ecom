import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

function Home() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Mini E-commerce</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="light" text="dark">{cartItems.length}</Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="my-4">
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
