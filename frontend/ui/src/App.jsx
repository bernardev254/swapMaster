import { BrowserRouter,Routes,Route } from "react-router-dom"
import Swap from "./Pages/Swap"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/swap" element={<Swap/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App