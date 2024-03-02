import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Header } from "./Components/Atoms"
import { AllProduct, DetailProduct, Login } from "./pages"

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='fixed top-0 left-0 w-full px-[10%] bg-gray-50/60'>
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<AllProduct />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/products/favorit" element={<AllProduct />} />
          <Route path="/products/terlaris" element={<AllProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
