import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { Container, Button, Image } from 'react-bootstrap';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <Container className="my-4">
      <Image src={product.image} fluid style={{ maxHeight: '300px', objectFit: 'contain' }} className="mb-3" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <p>Rating: ⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
      <Button onClick={() => addToCart(product)} variant="primary">Add to Cart</Button>
    </Container>
  );
}

export default ProductPage;