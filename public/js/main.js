// Load products from API
async function loadProducts() {
    try {
        const response = await fetch('/api/products');
        
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        
        const products = await response.json();
        
        const productsGrid = document.getElementById('products-grid');
        const productSelect = document.getElementById('product');
        
        // Clear existing content
        productsGrid.innerHTML = '';
        productSelect.innerHTML = '<option value="">Select a product</option>';
        
        // Create product cards
        products.forEach(product => {
            // Add to grid - using safe DOM methods
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            
            const productInfo = document.createElement('div');
            productInfo.className = 'product-info';
            
            const title = document.createElement('h3');
            title.textContent = product.name;
            
            const description = document.createElement('p');
            description.textContent = product.description;
            
            const priceDiv = document.createElement('div');
            priceDiv.className = 'product-price';
            priceDiv.textContent = `$${product.price.toFixed(2)}`;
            
            productInfo.appendChild(title);
            productInfo.appendChild(description);
            productInfo.appendChild(priceDiv);
            
            productCard.appendChild(img);
            productCard.appendChild(productInfo);
            productsGrid.appendChild(productCard);
            
            // Add to select dropdown
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            productSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Handle order form submission
document.getElementById('order-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const messageDiv = document.getElementById('order-message');
    messageDiv.className = 'message';
    messageDiv.style.display = 'none';
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        product: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value,
        address: document.getElementById('address').value
    };
    
    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit order');
        }
        
        const result = await response.json();
        
        if (result.success) {
            messageDiv.className = 'message success';
            messageDiv.textContent = result.message;
            messageDiv.style.display = 'block';
            
            // Reset form
            document.getElementById('order-form').reset();
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error('Order submission failed');
        }
    } catch (error) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Error submitting order. Please try again.';
        messageDiv.style.display = 'block';
        console.error('Error submitting order:', error);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load products when page loads
document.addEventListener('DOMContentLoaded', loadProducts);
