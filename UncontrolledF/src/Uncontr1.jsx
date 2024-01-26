export function UncontrolLogin() {
  function handleData(e) {
    e.preventDefault();
    const username = e.target.elements.namedItem("username").value;
    const password = e.target.elements.namedItem("password").value;
    const session = e.target.elements.namedItem("session").checked;

    const data = {
      username,
      password,
      session,
    };
    console.log(data);
  }
  return (
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
  );
}
