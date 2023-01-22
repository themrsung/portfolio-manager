import { useNavigate } from "react-router-dom"
import { logout } from "../api/authApi"

export default function NavigationBar() {
    const navigate = useNavigate()

    const onHomeClicked = () => {
        navigate("/")
    }

    const onLoginClicked = () => {
        navigate("/login")
    }

    const onRegisterClicked = () => {
        navigate("/register")
    }

    const onAddItemClicked = () => {
        navigate("/additem")
    }

    const onPortfolioItemClicked = () => {
        navigate("/portfolioitem")
    }

    const onLogoutClicked = () => {
        logout()
        navigate("/")
    }

    return (
        <>
            <nav>
                <button onClick={onHomeClicked}>Home</button>
                <button onClick={onLoginClicked}>Login</button>
                <button onClick={onRegisterClicked}>Register</button>
                <button onClick={onAddItemClicked}>Add Item</button>
                <button onClick={onPortfolioItemClicked}>Portfolio Item</button>
                <button onClick={onLogoutClicked}>Logout</button>
            </nav>
        </>
    )
}
