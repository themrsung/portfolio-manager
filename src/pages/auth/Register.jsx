import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addUser } from "../../api/authApi"

export default function Register() {
    const navigate = useNavigate()

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onRegisterFormSubmit = async () => {
        const user = {
            id: id,
            password: password
        }

        const res = await addUser(user)
        if (!res) {
            alert("실패")
            return
        }

        navigate("/login")
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onRegisterFormSubmit()
                }}
            >
                <input
                    value={id}
                    onChange={(e) => {
                        setId(e.target.value)
                    }}
                />
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <button type="submit">register</button>
            </form>
        </>
    )
}
