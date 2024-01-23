import { useState } from "react";

export function Login({onLogin}) {
  const [data, setData] = useState({
    username: "",
    password: "",
    checked: false,
  });

  function handleDataInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  //Es 3
  function onLogin(data) {
    console.log(data);
  }

  return (
    <div>
      <h3>Name</h3>
      <input
        name="username"
        type="text"
        value={data.username}
        onChange={handleDataInput}
      />
      <br />
      <h3>Password</h3>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleDataInput}
      />
      <br />
      <input
        name="checked"
        type="checkbox"
        value={data.checked}
        onChange={handleDataInput}
      />
        <br />
      <button disabled={!data.username || !data.password} onClick={()=> onLogin(data)}>
        Login
      </button>
    </div>
  );
}
