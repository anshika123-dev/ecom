import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1rem' }}>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>⭐ {product.rating.rate}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;