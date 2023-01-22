import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import AddItem from "./components/portfolio/AddItem"
import PortfolioItem from "./components/portfolio/PortfolioItem"
import NavigationBar from "./components/NavigationBar"

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="additem" element={<AddItem />} />
                <Route path="portfolioitem" element={<PortfolioItem />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
