import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import BandsPage from "./pages/BandsPage/BandsPage.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { useState, useRef, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Ref to the footer element
  const footerRef = useRef(null);

  // 加载购物车内容
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:8080/cart");
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleAddToCart = async (product, quantity) => {
    // 这里的 prevCartItems 是 useState 的当前状态值，实际上是 React 的 setState 函数的回调参数
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.band_id === product.id
      );
      if (existingItem) {
        // 商品已存在，增加数量
        return prevCartItems.map((item) =>
          item.band_id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // 商品不存在，新增商品
        return [
          ...prevCartItems,
          { band_id: product.id, quantity, ...product },
        ];
      }
    });

    // 同步到后端
    try {
      const response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ band_id: product.id, quantity }),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 小红标和购物车标题显示商品种类的数量
  const cartItemCount = cartItems.length;

  const handleIncrease = async (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.cart_id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    try {
      await fetch(`http://localhost:8080/cart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: cartItems.find((item) => item.cart_id === id).quantity + 1,
        }),
      });
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const handleDecrease = async (id) => {
    const item = cartItems.find((item) => item.cart_id === id);
    if (item.quantity <= 1) return;

    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.cart_id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );

    try {
      await fetch(`http://localhost:8080/cart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      });
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
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
        onMenuClick={handleScrollToFooter}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/bands"
          element={<BandsPage onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              total={total}
              onSubmit={(formData) => {
                console.log("Form submitted with:", formData);
                setCartItems([]); // 清空购物车
              }}
            />
          }
        />
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
      <Contact />
      {/* Add ref to Footer */}
      <Footer ref={footerRef} />
    </BrowserRouter>
  );
}

export default App;
