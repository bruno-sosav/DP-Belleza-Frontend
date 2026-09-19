import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Services from "./front-turnera/pages/Services"
import ServiceDetail from "./front-turnera/pages/ServiceDetail"
import Booking from "./front-turnera/pages/Booking"
import BookingConfirmed from "./front-turnera/pages/BookingConfirmed"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Turnera — front-turnera/ (Bruno) */}
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:id" element={<ServiceDetail />} />
        <Route path="/reservar/:id" element={<Booking />} />
        <Route path="/reserva-confirmada" element={<BookingConfirmed />} />

        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
