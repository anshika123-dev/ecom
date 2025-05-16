import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="my-4">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <Row key={item.id} className="align-items-center mb-3">
            <Col xs={3} md={2}>
              <Image src={item.image} fluid style={{ height: '80px', objectFit: 'contain' }} />
            </Col>
            <Col xs={6}>
              <h5>{item.title}</h5>
              <p>${item.price} x {item.quantity}</p>
            </Col>
            <Col xs={3} className="d-flex flex-column">
              <Button size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
              <Button size="sm" onClick={() => updateQuantity(item.id, 1)} className="my-1">+</Button>
              <Button size="sm" variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </Col>
          </Row>
        ))
      )}
      <h4>Total: ${total.toFixed(2)}</h4>
    </Container>
  );
}

export default CartPage;