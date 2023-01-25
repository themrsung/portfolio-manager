import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import AddItem from "./components/portfolio/AddItem"
import NavigationBar from "./components/NavigationBar"
import PortfolioItemDetails from "./pages/portfolio/PortfolioItemDetails"
import MyPortfolio from "./pages/portfolio/MyPortfolio"

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="additem" element={<AddItem />} />
                <Route path="item" element={<PortfolioItemDetails />} />
                <Route path="portfolio" element={<MyPortfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
