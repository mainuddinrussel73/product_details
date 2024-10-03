const express = require('express');
const cors = require('cors');
const products = require('./products.json');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend-backend communication
app.use(cors());

// Endpoint to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint to get a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
