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

import ProtectedRoute from "./ProtectedRoute";
import EgresoFormPage from "./pages/EgresoFormPage";
import { EgresoProvider } from "./Context/EgresosContext";
import { UsuarioProvider } from "./Context/UsuariosContext";
import UsuariosPage from "./pages/UsuariosPage";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <EgresoProvider>
          <UsuarioProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/ingresos" element={<IngresosPage />} />
                  <Route path="/egresos/new" element={<EgresoFormPage />} />
                  <Route
                    path="/actualizarEgreso/:id"
                    element={<EgresoFormPage />}
                  />
                  <Route path="/egresos" element={<EgresosPage />} />
                  <Route path="/usuarios" element={<UsuariosPage/>} />
                  <Route path="/actualizarUsuario/:id" element={<RegisterPage/>} />
                </Route>

                <Route path="/crearProducto" element={<ProductPageForm />} />
                <Route
                  path="/obtenerProducto/:id"
                  element={<ProductPageForm />}
                />
                <Route path="/obtenerProductos" element={<ProductPage />} />
              </Routes>
            </BrowserRouter>
          </UsuarioProvider>
        </EgresoProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
