import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import ProductPageForm from "./pages/ProductPageForm";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./Context/ProductContext";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IngresosPage from "./pages/IngresosPage";
import EgresosPage from "./pages/EgresosPage";

import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element= {<ProtectedRoute/>} >
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/ingresos" element={<IngresosPage/>} />
            <Route path="/egresos" element={<EgresosPage />} />
          </Route>
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
