import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./Context/AuthContext";
import ProductPageForm from "./pages/ProductPageForm";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./Context/ProductContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/inicio" element={<h1>Home Page</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/crearProducto" element={<ProductPageForm />} />
          <Route path="/obtenerProducto/:id" element={<ProductPageForm />} />
          <Route path="/obtenerProductos" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
