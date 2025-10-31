const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to handle orders
app.post('/api/orders', (req, res) => {
  const { name, email, product, quantity, address } = req.body;
  
  // In a real application, you would save this to a database
  console.log('New Order Received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Product:', product);
  console.log('Quantity:', quantity);
  console.log('Address:', address);
  
  res.json({ 
    success: true, 
    message: 'Order received successfully! We will contact you soon.',
    orderId: Date.now() // Simple order ID generation
  });
});

// API endpoint to get products
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 29.99,
      description: 'High-quality wireless earbuds with noise cancellation',
      image: 'https://via.placeholder.com/300x300/4A90E2/ffffff?text=Wireless+Earbuds'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 79.99,
      description: 'Feature-rich smartwatch with fitness tracking',
      image: 'https://via.placeholder.com/300x300/7B68EE/ffffff?text=Smart+Watch'
    },
    {
      id: 3,
      name: 'Phone Case',
      price: 14.99,
      description: 'Durable protective phone case',
      image: 'https://via.placeholder.com/300x300/50C878/ffffff?text=Phone+Case'
    },
    {
      id: 4,
      name: 'Portable Charger',
      price: 24.99,
      description: 'High-capacity portable power bank',
      image: 'https://via.placeholder.com/300x300/FF6347/ffffff?text=Portable+Charger'
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 39.99,
      description: 'Waterproof portable Bluetooth speaker',
      image: 'https://via.placeholder.com/300x300/FFD700/ffffff?text=BT+Speaker'
    },
    {
      id: 6,
      name: 'Laptop Stand',
      price: 34.99,
      description: 'Ergonomic adjustable laptop stand',
      image: 'https://via.placeholder.com/300x300/9370DB/ffffff?text=Laptop+Stand'
    }
  ];
  
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
