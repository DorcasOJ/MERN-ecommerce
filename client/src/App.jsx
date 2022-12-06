import Home from "./pages/Home";
// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  Routes,
  Route,
  //  Navigate,
} from "react-router-dom";
// // import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      {/* <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/category" element={<ProductList />} />
       */}
      <Route path="*" element= "Not Found" />
    </Routes>
    
    {/* <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/products/category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
        {user ? <Navigate to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Navigate to="/" /> : <Register />}
        </Route>
      </Routes>
    </Router> */}
  </div>;
};

export default App;