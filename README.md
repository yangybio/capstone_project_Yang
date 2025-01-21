# Project Title

**CalisTenancy**

## Overview

**CalisTenancy** is a fitness-focused online platform offering premium calisthenics products designed to help users achieve their fitness goals. From resistance bands and gymnastic rings to other calisthenics equipment, **CalisTenancy** provides high-quality products that are both functional and stylish. We aim to create a community for fitness enthusiasts of all levels, providing tools to enhance their workout experience and improve performance.

## Problem

The calisthenics equipment market is growing, but many fitness enthusiasts struggle to find a platform that offers both variety and quality. Many online stores are cluttered, lack detailed product descriptions, and offer subpar products that don't meet the needs of serious athletes. Additionally, there is a lack of an intuitive, user-friendly shopping experience focused specifically on calisthenics equipment.

## User Profile

### Shoppers

- Fitness enthusiasts looking for premium, high-performance calisthenics equipment.
- Individuals who prefer bodyweight training over traditional gym-based exercises.
- Seeking specialized tools to improve strength, flexibility, and endurance.
- Looking for a clear, simple shopping experience, reliable product information, and secure checkout process.

### Sellers

- Independent fitness equipment manufacturers and brands offering calisthenics gear.
- Looking for a cost-effective way to sell high-quality products to a growing community of fitness enthusiasts.

## Features

### Shopper Features

- **Browse a curated catalog** of calisthenics products, categorized by type (e.g., resistance bands, gymnastic rings, pull-up bars).
- **Search for specific products** using filters like price, brand, material, and popularity.
- **Create an account** to save favorite items and track order history.
- **View detailed product descriptions**, including materials, usage guides, and user reviews.
- **Secure checkout process** with multiple payment options (e.g., credit cards, PayPal).


### General Features

- **Responsive website** that works seamlessly on both mobile and desktop devices.
- **Customer support page** with FAQs and live chat support for inquiries and issue resolution.

## Implementation

### Tech Stack

- **Frontend**:
  - React
  - SASS for styling
- **Backend**:
  - Node.js
  - Express
- **Database**:
  - MySQL
- **Authentication**:
  - JSON Web Tokens (JWT) for secure login and session management
- **Payment Integration**:
  - Stripe API for payment processing
- **Client Libraries**:
  - React
  - Axios
  - React-router
- **Server Libraries**:
  - Express
  - Mongoose
  - Bcrypt for password hashing

### APIs

#### External APIs

- **Stripe** for payment processing.

#### Internal APIs

- **Product catalog API** for listing and searching calisthenics equipment.
- **User authentication and account management API**.
- **Order management API** for tracking purchases and sales.

## Sitemap

- **Home Page**: Showcasing featured products, new arrivals, and limited-edition collections.
- **Product(Bands) Page**: Viewing detailed product descriptions, design stories, and customer reviews.
- **Shopping Cart Page**: Managing selected products, modifying quantities, and viewing the total amount.
- **Checkout Page**: Securely completing payment, reviewing the order summary, and processing payment details.


## Future Enhancements

- **Customer Support Page**: Providing contact information, FAQs, and live chat support.
- **Mobile app development** for iOS and Android to enhance the shopping experience.
- **Personalized recommendations** based on product usage and fitness goals.
- **Social media integration** (e.g., Instagram, Pinterest) for easy sharing and promoting of products and workout routines.
- **Fitness community platform** for users to interact, share progress, and participate in challenges.
- **Loyalty rewards program** to encourage repeat customers and foster brand loyalty.
- **Custom equipment platform** where users can design personalized calisthenics products.

### Mockups

#### Home Page
![](assets/icons/HomePage.png)

#### Bands Page
![](assets/icons/BandsPage.png)

#### Cart Page
![](assets/icons/CartPage.png)

#### Checkout Page
![](assets/icons/CheckoutPage.png)


### Endpoints

**GET /**

- Get all prodcuts


Response:
```
[
    {
        "id": 1,
        "name": "Quantum Coffee",
        "distance": 0.25,
        "averageRating": 4.5,
        "visited": true
    },
    ...
]
```

**GET /bands**

- Get all bands products

Response:
```
{
    "id": 1,
    "name": "Simple Elastic Bands",
    "quantity": 2,
    "price": 90.00
}
```

**GET /checkout**

- checkout for items


## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 10 responses

- Create migrations
    - Create database structure for bands, cart, and users

- Seed database
    - Add sample bands and user data, including:
    - 5 different types of bands
    - Initial empty cart for the fake user

- Deploy
    - Deploy both client and server to ensure all commits are reflected in production

- Feature: List bands
    - Implement "Bands" page to list all available bands
    - Create GET /bands endpoint
    - Include user state (e.g., "addedToCart")

- Feature: Checkout
    - Implement "Checkout" page to list all available items in cart
    - Create GET /cart endpoint

- Feature: Home page
    - Implement a home page to display app introduction and navigation links

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Integrate third-party APIs:
    - Add Google Maps to view bands' manufacturing/distribution locations
    - VVisual radius for product availability
- Enhanced user features
    - User profile with favorite bands
    - "Elite" user status for frequent buyers
- Ability to add a café 
- Elite status badging for users and cafés: Gamify user ratings
- Expanded band information:
    - Add video demonstrations of bands
    - Suggested usage guides
