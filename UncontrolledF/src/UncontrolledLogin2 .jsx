export function UncontrolledLogin() {
    function handleData(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data={
            username: formData.get('username'),
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false,
           }
           console.log(data)
        
    }
    return(
        <form onSubmit={handleData}>
            <label htmlFor="name">Username</label>
      <input name="username" type="text" />
      <br />
      <br />
      <label htmlFor="password">Password</label>
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
    
}