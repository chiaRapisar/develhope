import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchGithubUser() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/chiarapisar`);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    fetchGithubUser,
  };
  // const [data, setData] = useState ([])
  // const [username, setUsername] = useState ()

  // function handleInput(e) {
  //     setUsername(e.target.value)
  // }

  // function hanldeBtn() {
  //     setData ((prev) => [... prev, username])
  //     setUsername('')
  // }

  // function hanldeForm(e) {
  //     e.preventDefault()
  // }
  // console.log(data)
  // return(
  //     <div>
  //         <form onSubmit={hanldeForm}>
  //         <label htmlFor="">Username:  </label>
  //         <input onChange={handleInput} type="text" value={username} />
  //         <button onClick={hanldeBtn}>Cerca</button>
  //         </form>

  //         <ul>
  //             {data.map((item , index) =>
  //                 <li key={index}><GithubUser username={item}/></li>
  //                 )}
  //         </ul>
  //     </div>
  // )
}
