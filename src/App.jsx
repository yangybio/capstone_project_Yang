import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
// import BookingPage from "./pages/BookingPage/BookingPage.jsx";
// import BookingDetailsPage from "./pages/BookingDetailsPage/BookingDetailsPage.jsx";
// import BookingConfirmationPage from "./pages/BookingConfirmationPage/BookingConfirmationPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <Header
        cartItemCount={cartItemCount}
        onCartIconClick={() => setIsCartOpen(!isCartOpen)}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage onAddToCart={handleAddToCart} />}
        />
        {/* <Route path="/booking" element={<BookingPage />} /> */}
        {/* <Route path="/booking-details" element={<BookingDetailsPage />} /> */}
        {/* <Route
          path="/booking-confirmation"
          element={<BookingConfirmationPage />}
        /> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          total={total}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onClose={() => setIsCartOpen(false)}
        />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
