import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home"
import AddItem from "./components/portfolio/AddItem"
import NavigationBar from "./components/NavigationBar"
import PortfolioItemDetails from "./pages/portfolio/PortfolioItemDetails"
import MyPortfolio from "./pages/portfolio/MyPortfolio"
import { store } from "./redux/config"
import { Provider } from "react-redux"

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="additem" element={<AddItem />} />
                    <Route path="item/:id" element={<PortfolioItemDetails />} />
                    <Route path="portfolio" element={<MyPortfolio />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
