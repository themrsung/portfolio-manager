import { useState } from "react"
import { login } from "../../api/authApi"

export default function Login() {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const onLoginFormSubmitted = async () => {
        const res = await login(id, password)
        if (!res) {
            alert("로그인 실패")
            return
        }

        alert("로그인 성공")
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onLoginFormSubmitted()
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
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <button type="submit">login</button>
            </form>
        </>
    )
}
