import { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom";

export function GithubUserList() {
  const [data, setData] = useState([]);

    useEffect(()=> {
      async function fecthData() {
        try{ const res = await fetch(`https://api.github.com/users`);
        const data = await res.json();
        setData(data);
      }catch (error){console.error(error)}
      }
      fecthData()
    }, [])
  
     
  
  return (
    <>
      <ul>
        {data.map((user) => {
          return  <li key={user.id}><Link to={`/users/${user.login}`}>{user.login}</Link></li>
        })}
      </ul>
      <br />
      <Outlet/>
    </>
  );
}