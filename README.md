# TechDrop - Dropshipping Website

A simple and elegant dropshipping website built with HTML, CSS, JavaScript for the frontend and Node.js with Express for the backend.

## Features

- 🎨 Modern and responsive design
- 🛍️ Product catalog with 6 tech products
- 📝 Order form with validation
- 🚀 RESTful API for products and orders
- 📱 Mobile-friendly interface
- ⚡ Fast and lightweight

## Tech Stack

### Frontend
- HTML5
- CSS3 (with modern flexbox and grid layouts)
- Vanilla JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- Body-parser middleware

## Project Structure

```
DSwebpage/
├── server.js              # Express server and API endpoints
├── package.json           # Node.js dependencies
├── .gitignore            # Git ignore rules
└── public/               # Frontend static files
    ├── index.html        # Main HTML page
    ├── css/
    │   └── style.css     # Stylesheet
    └── js/
        └── main.js       # Client-side JavaScript
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/lilskyex0x/DSwebpage.git
cd DSwebpage
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

The server will run on port 3000 by default. You can change this by setting the `PORT` environment variable.

## API Endpoints

### GET /api/products
Returns a list of all available products.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Earbuds",
    "price": 29.99,
    "description": "High-quality wireless earbuds with noise cancellation",
    "image": "..."
  },
  ...
]
```

### POST /api/orders
Submit a new order.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "product": "Wireless Earbuds",
  "quantity": 2,
  "address": "123 Main St, New York, NY 10001"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order received successfully! We will contact you soon.",
  "orderId": 1234567890
}
```

## Features Explained

### Hero Section
Eye-catching gradient background with call-to-action button.

### Products Section
- Dynamic product loading from API
- Responsive grid layout
- Hover effects on product cards
- Product information including name, description, and price

### About Section
Company information and value propositions.

### Order Form
- Client-side form validation
- Dynamic product dropdown populated from API
- Success/error message display
- Form reset after successful submission
- Smooth scrolling to success message

### Navigation
- Sticky navigation bar
- Smooth scrolling to sections
- Responsive mobile menu

## Customization

### Adding New Products
Edit the products array in `server.js`:

```javascript
const products = [
  {
    id: 7,
    name: 'Your Product',
    price: 49.99,
    description: 'Product description',
    image: 'image-url'
  }
];
```

### Styling
Modify `public/css/style.css` to change colors, fonts, or layout.

### Port Configuration
Set the PORT environment variable:
```bash
PORT=8080 npm start
```

## Future Enhancements

- Database integration (MongoDB, PostgreSQL)
- Payment gateway integration (Stripe, PayPal)
- User authentication
- Shopping cart functionality
- Admin panel for managing products
- Email notifications
- Order tracking system

## License

ISC

## Author

Created for dropshipping business
