import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
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

  const handleAddToCart = (product, quantity) => {
    // 这里的 prevCartItems 是 useState 的当前状态值，实际上是 React 的 setState 函数的回调参数
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // 商品已存在，增加数量
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // 商品不存在，新增商品
        return [...prevCartItems, { ...product, quantity }];
      }
    });
  };

  // 小红标和购物车标题显示商品种类的数量
  const cartItemCount = cartItems.length;

  const handleIncrease = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
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
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {isCartOpen && (
        <Cart
          cartItems={Array.isArray(cartItems) ? cartItems : []}
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
