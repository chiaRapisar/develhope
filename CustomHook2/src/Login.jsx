import { useLogin } from "./useLogin";

export function Login() {
    const [data, utente, handleInputChange, submitData]= useLogin()

    return(
        <>
        <form onSubmit={submitData}>
        <label> Name:
        <input type="text" name="username" value={data.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>Password:
            <input type="password" name="password" value={data.password} onChange={handleInputChange} />
        </label>
        <br />
        <button>Login</button>
        <br />
        <p>name: {utente.username}</p>
        <p>password: {utente.password}</p>
        </form>
        </>
    )
    
}