import { Route, Routes } from "react-router-dom"
import ProductList from "./Pages/ProductList"
import ProductDetails from "./Pages/ProductDetails"


function App() {
  return (
    <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
  )
}

export default App
