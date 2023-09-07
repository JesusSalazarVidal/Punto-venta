import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import ProductPageForm from "./pages/ProductPageForm";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./Context/ProductContext";
import { VentaProvider } from "./Context/VentasContext";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import IngresosPage from "./pages/IngresosPage";
import EgresosPage from "./pages/EgresosPage";
import VentaPage from "./pages/VentaPage";
import VentaFormPage from "./pages/VentaFormPage";


import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <VentaProvider>
      <BrowserRouter>
      <main className="container mx-auto px-5">
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

          <Route path="/crearVenta" element={<VentaFormPage />} />
          <Route path="/obtenerVenta/:id" element={<VentaFormPage />} />
          <Route path="/obtenerVentas" element={<VentaPage />} />
        </Routes>
        </main>
        </BrowserRouter>
      </VentaProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
