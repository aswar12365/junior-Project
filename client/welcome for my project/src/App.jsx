import { Routes,Route,Link } from "react-router-dom"
import Product from "./components/Product.jsx"
import './App.css'

function App() {

  return (
    <>
    <nav className="navbar">
    <Link to="/product">Hello for my page Delicious smell</Link> 

    </nav>
    <Routes>
      <Route path="product" element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
